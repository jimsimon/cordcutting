'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  ESPN, AMC, CNN, HGTV, ComedyCentral, CartoonNetwork, HistoryChannel,
  Disney, ESPN2, ESPN3, TNT, FoodNetwork, TBS, BBCAmerica,
  Freeform, IFC, TribecaShortlist, AE, ElRey, Viceland,
  Lifetime, TravelChannel, AXSTV, Newsy, Cheddar, BloombergTV, LocalNow, Flama,
  Galavision
} = require('./util/channels')

const channels = [
  ESPN, AMC, CNN, HGTV, ComedyCentral, CartoonNetwork, HistoryChannel,
  Disney, ESPN2, ESPN3, TNT, FoodNetwork, TBS, BBCAmerica,
  Freeform, IFC, TribecaShortlist, AE, ElRey, Viceland,
  Lifetime, TravelChannel, AXSTV, Newsy, Cheddar, BloombergTV, LocalNow, Flama,
  Galavision
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('Sling TV', 'Orange', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('Sling TV', 'Orange')
  }
};
