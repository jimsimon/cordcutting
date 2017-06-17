'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  ABC, CBS, FOX, NBC, CW, Telemundo,
  ESPN, CSNRegional, FOXSportsRegional, FOXSports1, AMC, USA,
  FX, Freeform, Disney, E, ESPN2, FOXSports2,
  BigTenNetwork, SECNetwork, ESPNU, ESPNews, Bravo, Oxygen,
  IFC, FXX, NBCUniverso, Syfy, DisneyJunior, DisneyXD,
  Sprout, CBSSportsNetwork, NBCSportsNetwork, GolfChannel, MSNBC, FOXNews,
  CNBC, FOXBusiness, SundanceTV, NationalGeographic, NatGeoWild, WE,
  BBCAmerica, FXM, UniversalHD, Chiller, YouTubeRedOriginals
} = require('./util/channels')

const channels = [
  ABC, CBS, FOX, NBC, CW, Telemundo,
  ESPN, CSNRegional, FOXSportsRegional, FOXSports1, AMC, USA,
  FX, Freeform, Disney, E, ESPN2, FOXSports2,
  BigTenNetwork, SECNetwork, ESPNU, ESPNews, Bravo, Oxygen,
  IFC, FXX, NBCUniverso, Syfy, DisneyJunior, DisneyXD,
  Sprout, CBSSportsNetwork, NBCSportsNetwork, GolfChannel, MSNBC, FOXNews,
  CNBC, FOXBusiness, SundanceTV, NationalGeographic, NatGeoWild, WE,
  BBCAmerica, FXM, UniversalHD, Chiller, YouTubeRedOriginals
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('YouTube TV', 'Standard', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('YouTube TV', 'Standard')
  }
};
