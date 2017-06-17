'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BET, BloombergTV, Bravo, BigTenNetwork, CSPAN,
  CSPAN2, CartoonNetwork, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DiscoveryChannel,
  Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, ESPNews, ESPNU, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  Freeform, Fuse, Fusion, FX, FXX, Galavision, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
  IFC, InvestigationDiscovery, JusticeChannel, Lifetime, MLBNetwork, MSNBC, MTV, MTV2, NationalGeographic, NBC, NBCSportsNetwork,
  NickJr, Nickelodeon, Nicktoons, OWN, RFDTV, Sci, SECNetwork, Spike,
  SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
  TVLand, UniMas, Univision, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
} = require('./util/channels')

const channels = [
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BET, BloombergTV, Bravo, BigTenNetwork, CSPAN,
  CSPAN2, CartoonNetwork, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DiscoveryChannel,
  Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, ESPNews, ESPNU, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  Freeform, Fuse, Fusion, FX, FXX, Galavision, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
  IFC, InvestigationDiscovery, JusticeChannel, Lifetime, MLBNetwork, MSNBC, MTV, MTV2, NationalGeographic, NBC, NBCSportsNetwork,
  NickJr, Nickelodeon, Nicktoons, OWN, RFDTV, Sci, SECNetwork, Spike,
  SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
  TVLand, UniMas, Univision, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('DirecTV Now', 'Just Right', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('DirecTV Now', 'Just Right')
  }
};
