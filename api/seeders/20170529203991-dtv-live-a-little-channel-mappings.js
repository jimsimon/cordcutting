'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BET, BloombergTV, Bravo, CSPAN,
  CSPAN2, CartoonNetwork, CMT, CNBC, CNN, ComedyCentral, DiscoveryChannel,
  Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  Freeform, FX, FXX, Galavision, HallmarkChannel, HallmarkMM, HGTV, HistoryChannel, HLN,
  InvestigationDiscovery, Lifetime, MSNBC, MTV, MTV2, NationalGeographic, NBC,
  NickJr, Nickelodeon, RFDTV, Spike,
  Syfy, TBS, TCM, TeenNick, Telemundo, TLC, TNT, truTV,
  TVLand, Univision, USA, Velocity, VH1, Viceland, WE, WeatherNation
} = require('./util/channels')

const channels = [
  AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BET, BloombergTV, Bravo, CSPAN,
  CSPAN2, CartoonNetwork, CMT, CNBC, CNN, ComedyCentral, DiscoveryChannel,
  Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
  Freeform, FX, FXX, Galavision, HallmarkChannel, HallmarkMM, HGTV, HistoryChannel, HLN,
  InvestigationDiscovery, Lifetime, MSNBC, MTV, MTV2, NationalGeographic, NBC,
  NickJr, Nickelodeon, RFDTV, Spike,
  Syfy, TBS, TCM, TeenNick, Telemundo, TLC, TNT, truTV,
  TVLand, Univision, USA, Velocity, VH1, Viceland, WE, WeatherNation
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('DirecTV Now', 'Live A Little', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('DirecTV Now', 'Live A Little')
  }
};
