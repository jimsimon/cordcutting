'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  ABC, CBS, FOX, NBC, AE, BigTenNetwork, Boomerang,
  Bravo, CartoonNetwork, CBSSportsNetwork, Chiller, CNBC, CNN, CNNInternational,
  Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, ESPNews,
  ESPNU, FoodNetwork, FOXBusiness, FOXNews, FOXSports1, FOXSports2, Freeform,
  FX, FXM, FXX, FYI, GolfChannel, HGTV, HistoryChannel,
  HLN, Lifetime, LMN, MSNBC, NationalGeographic, NatGeoWild, NBCSportsNetwork,
  Oxygen, Pop, SECNetwork, Sprout, Syfy, TBS, TCM,
  TNT, TravelChannel, truTV, USA, Viceland
} = require('./util/channels')

const channels = [
  ABC, CBS, FOX, NBC, AE, BigTenNetwork, Boomerang,
  Bravo, CartoonNetwork, CBSSportsNetwork, Chiller, CNBC, CNN, CNNInternational,
  Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, ESPNews,
  ESPNU, FoodNetwork, FOXBusiness, FOXNews, FOXSports1, FOXSports2, Freeform,
  FX, FXM, FXX, FYI, GolfChannel, HGTV, HistoryChannel,
  HLN, Lifetime, LMN, MSNBC, NationalGeographic, NatGeoWild, NBCSportsNetwork,
  Oxygen, Pop, SECNetwork, Sprout, Syfy, TBS, TCM,
  TNT, TravelChannel, truTV, USA, Viceland
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('Hulu Live', 'Standard', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('Hulu Live', 'Standard')
  }
};
