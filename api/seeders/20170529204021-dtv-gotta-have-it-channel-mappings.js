'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BBCWorldNews, BET, Boomerang, BloombergTV, Bravo, BigTenNetwork, CSPAN,
  CSPAN2, CartoonNetwork, Centric, Chiller, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DiscoveryLife,
  Disney, DisneyJunior, DisneyXD, DIY, E, ElRey, ESPN, ESPN2, ESPNews, ESPNU, FM, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  FOXSports2, Freeform, Fuse, Fusion, FX, FXM, FXX, FYI, Galavision, GolfChannel, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
  IFC, InvestigationDiscovery, JusticeChannel, Lifetime, LMN, Logo, MLBNetwork, MSNBC, MTV, MTVClassic, MTV2, NatGeoWild, NationalGeographic, NBATV, NBC, NBCSportsNetwork,
  NBCUniverso, NHLNetwork, NickJr, Nickelodeon, Nicktoons, OWN, Oxygen, Revolt, RFDTV, Sci, SECNetwork, Spike, Sprout, StarzEncoreAction, StarzEncoreBlack, StarzEast,
  StarzEncoreFamily, StarzEncoreClassic, StarzEncoreSuspense, StarzEncoreWest, StarzEncoreWesterns, SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
  TVLand, TVG, UniMas, Univision, UnivisionDeportes, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
} = require('./util/channels')

const channels = [
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BBCWorldNews, BET, Boomerang, BloombergTV, Bravo, BigTenNetwork, CSPAN,
  CSPAN2, CartoonNetwork, Centric, Chiller, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DiscoveryLife,
  Disney, DisneyJunior, DisneyXD, DIY, E, ElRey, ESPN, ESPN2, ESPNews, ESPNU, FM, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  FOXSports2, Freeform, Fuse, Fusion, FX, FXM, FXX, FYI, Galavision, GolfChannel, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
  IFC, InvestigationDiscovery, JusticeChannel, Lifetime, LMN, Logo, MLBNetwork, MSNBC, MTV, MTVClassic, MTV2, NatGeoWild, NationalGeographic, NBATV, NBC, NBCSportsNetwork,
  NBCUniverso, NHLNetwork, NickJr, Nickelodeon, Nicktoons, OWN, Oxygen, Revolt, RFDTV, Sci, SECNetwork, Spike, Sprout, StarzEncoreAction, StarzEncoreBlack, StarzEast,
  StarzEncoreFamily, StarzEncoreClassic, StarzEncoreSuspense, StarzEncoreWest, StarzEncoreWesterns, SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
  TVLand, TVG, UniMas, Univision, UnivisionDeportes, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('DirecTV Now', 'Gotta Have It', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('DirecTV Now', 'Gotta Have It')
  }
};
