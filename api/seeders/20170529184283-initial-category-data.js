'use strict';

const { Category, Channel } = require('../models/index')
const {
  AMC, CNN, HGTV, ComedyCentral, CartoonNetwork, HistoryChannel, TNT, FoodNetwork, TBS, BBCAmerica, IFC,
  TribecaShortlist, AE, ElRey, Viceland, Lifetime, TravelChannel, AXSTV, Newsy, Cheddar, LocalNow,
  Flama, Galavision, FOX, NBC, FOXSportsRegional, CSNRegional, NFLNetwork, FX, USA, Bravo, FOXSports1, FOXSports2,
  NBCSportsNetwork, FXX, Syfy, NickJr, truTV, BET, NationalGeographic, NatGeoWild, Univision, UniMas, ESPN, Disney,
  ESPN2, ESPN3, Freeform, ABC, CBS, BigTenNetwork, Boomerang, CBSSportsNetwork, Chiller, CNBC, CNNInternational,
  DisneyJunior, DisneyXD, E, ESPNews, ESPNU, FOXBusiness, FOXNews, FXM, FYI, HLN, LMN, MSNBC, Oxygen, Pop,
  SECNetwork, Sprout, TCM, CW, Telemundo, NBCUniverso, SundanceTV, WE, UniversalHD, YouTubeRedOriginals, AnimalPlanet,
  DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DIY, InvestigationDiscovery, OWN, Sci, TLC,
  MLBNetwork, NBATV, AHC, BBCWorldNews, CNBCWorld, CookingChannel, DiscoveryLife, EpixHits, ESPNDeportes, esportsTV,
  Esquire, FOXCollegeSportsAtlantic, FOXCollegeSportsCentral, FOXCollegeSportsPacific, FOXDeportes, Fusion,
  GINXEsportsTV, HiYahTV, Impact, Machinima, MGMHD, ElevenSports, OutsideTelevision, Polaris, SonyMovieChannel,
  Velocity, HBO, Showtime, Audience, BabyFirst, BloombergTV, CSPAN, CSPAN2, CMT, HallmarkChannel,
  HallmarkMM, MTV, MTV2, Nickelodeon, RFDTV, Spike, TeenNick, TVLand, VH1, WeatherNation, ComedyTV, Fuse, GSN,
  JusticeChannel, Nicktoons, TennisChannel, TheWeatherChannel, Centric, FM, GolfChannel, Logo, MTVClassic, NHLNetwork,
  Revolt, TVG, StarzEncoreAction, StarzEncoreBlack, StarzEast, StarzEncoreFamily, StarzEncoreClassic,
  StarzEncoreSuspense, StarzEncoreWest, StarzEncoreWesterns, UnivisionDeportes
} = require('./util/channels')

const categories = [
  {
    name: 'Local',
    channels: [ ABC, CBS, FOX, NBC, CW, LocalNow ]
  },
  {
    name: 'Entertainment',
    channels: [
      AMC, ComedyCentral, HistoryChannel, TNT, TBS, BBCAmerica, TribecaShortlist, AE, E, FX, USA, Syfy, truTV,
      NationalGeographic, NatGeoWild, Freeform, ElRey, Viceland, AXSTV, IFC, Galavision, Flama, Bravo, FXX, BET,
      Univision, UnivisionDeportes, UniMas, Chiller, FXM, FYI, HLN, LMN, Oxygen, Pop, TCM, Telemundo, NBCUniverso,
      SundanceTV, WE, UniversalHD, YouTubeRedOriginals, AnimalPlanet, DestinationAmerica, DiscoveryChannel,
      DiscoveryFamily, DIY, InvestigationDiscovery, OWN, Sci, TLC, Esquire, DiscoveryLife, EpixHits, AHC, Fusion, Fuse,
      HiYahTV, Impact, Machinima, MGMHD, Polaris, SonyMovieChannel, Velocity, Audience, CMT, HallmarkChannel,
      HallmarkMM, MTV, MTV2, RFDTV, Spike, TVLand, VH1, ComedyTV, GSN, JusticeChannel, Centric, FM, Logo, MTVClassic,
      Revolt
    ]
  },
  {
    name: 'Financial',
    channels: [ CNBC, BloombergTV, CNBCWorld, FOXBusiness, Cheddar ]
  },
  {
    name: 'Premium',
    channels: [
      HBO, Showtime, StarzEast, StarzEncoreAction, StarzEncoreBlack, StarzEncoreClassic, StarzEncoreFamily,
      StarzEncoreSuspense, StarzEncoreWest, StarzEncoreWesterns
    ]
  },
  {
    name: 'Sports',
    channels: [
      FOXSports1, FOXCollegeSportsAtlantic, FOXCollegeSportsCentral, FOXCollegeSportsPacific, FOXSports2,
      FOXSportsRegional, CSNRegional, CBSSportsNetwork, NBCSportsNetwork, ESPN, ESPN2, ESPN3, ESPNDeportes, ESPNews,
      ESPNU, SECNetwork, NBATV, NFLNetwork, NHLNetwork, MLBNetwork, BigTenNetwork, TennisChannel, GolfChannel,
      GINXEsportsTV, esportsTV, ElevenSports, FOXDeportes, TVG
    ]
  },
  {
    name: 'Lifestyle',
    channels: [ HGTV, FoodNetwork, Lifetime, TravelChannel, CookingChannel, OutsideTelevision ]
  },
  {
    name: 'Kids',
    channels: [
      CartoonNetwork, Nickelodeon, NickJr, Nicktoons, TeenNick, Boomerang, Sprout, Disney, DisneyJunior, DisneyXD,
      BabyFirst
    ]
  },
  {
    name: 'News and Weather',
    channels: [
      CNN, CNNInternational, Newsy, BBCWorldNews, MSNBC, FOXNews, TheWeatherChannel, WeatherNation, CSPAN, CSPAN2
    ]
  }
]

module.exports = {
  up: function (queryInterface, Sequelize) {
    const promises = []
    for (const category of categories) {
      promises.push(
        Category.create(category, { include: [Channel] })
      )
    }
    return Promise.all(promises)
  },

  down: function (queryInterface, Sequelize) {
    return Category.destroy({ where: { name: { $in: categories.map(c => c.name) }}})
  }
}
