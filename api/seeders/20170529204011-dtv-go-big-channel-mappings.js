'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BBCWorldNews, BET, BloombergTV, Bravo, BigTenNetwork, CSPAN,
  CSPAN2, CartoonNetwork, Centric, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DiscoveryLife,
  Disney, DisneyJunior, DisneyXD, DIY, E, ESPN, ESPN2, ESPNews, ESPNU, FM, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  FOXSports2, Freeform, Fuse, Fusion, FX, FXM, FXX, FYI, Galavision, GolfChannel, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
  IFC, InvestigationDiscovery, JusticeChannel, Lifetime, LMN, Logo, MLBNetwork, MSNBC, MTV, MTVClassic, MTV2, NatGeoWild, NationalGeographic, NBATV, NBC, NBCSportsNetwork,
  NBCUniverso, NHLNetwork, NickJr, Nickelodeon, Nicktoons, OWN, Oxygen, Revolt, RFDTV, Sci, SECNetwork, Spike, Sprout,
  SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
  TVLand, TVG, UniMas, Univision, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
} = require('./util/channels')

const channels = [
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BBCWorldNews, BET, BloombergTV, Bravo, BigTenNetwork, CSPAN,
  CSPAN2, CartoonNetwork, Centric, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DiscoveryLife,
  Disney, DisneyJunior, DisneyXD, DIY, E, ESPN, ESPN2, ESPNews, ESPNU, FM, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  FOXSports2, Freeform, Fuse, Fusion, FX, FXM, FXX, FYI, Galavision, GolfChannel, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
  IFC, InvestigationDiscovery, JusticeChannel, Lifetime, LMN, Logo, MLBNetwork, MSNBC, MTV, MTVClassic, MTV2, NatGeoWild, NationalGeographic, NBATV, NBC, NBCSportsNetwork,
  NBCUniverso, NHLNetwork, NickJr, Nickelodeon, Nicktoons, OWN, Oxygen, Revolt, RFDTV, Sci, SECNetwork, Spike, Sprout,
  SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
  TVLand, TVG, UniMas, Univision, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('DirecTV Now', 'Go Big', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('DirecTV Now', 'Go Big')
  }
};
