'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  AMC, CNN, HGTV, ComedyCentral, CartoonNetwork,
  HistoryChannel, TNT, FoodNetwork, TBS, BBCAmerica, IFC, TribecaShortlist,
  AE, ElRey, Viceland, Lifetime, TravelChannel, AXSTV, Newsy, Cheddar,
  BloombergTV, LocalNow, Flama, Galavision, FOX, NBC, FOXSportsRegional,
  CSNRegional, NFLNetwork, FX, USA, Bravo, FOXSports1, FOXSports2,
  NBCSportsNetwork, FXX, Syfy, NickJr, truTV, BET, NationalGeographic,
  NatGeoWild, Univision, UniMas
} = require('./util/channels')

const channels = [
  AMC, CNN, HGTV, ComedyCentral, CartoonNetwork,
  HistoryChannel, TNT, FoodNetwork, TBS, BBCAmerica, IFC, TribecaShortlist,
  AE, ElRey, Viceland, Lifetime, TravelChannel, AXSTV, Newsy, Cheddar,
  BloombergTV, LocalNow, Flama, Galavision, FOX, NBC, FOXSportsRegional,
  CSNRegional, NFLNetwork, FX, USA, Bravo, FOXSports1, FOXSports2,
  NBCSportsNetwork, FXX, Syfy, NickJr, truTV, BET, NationalGeographic,
  NatGeoWild, Univision, UniMas
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('Sling TV', 'Blue', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('Sling TV', 'Blue')
  }
};
