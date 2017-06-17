'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  FOX, NBC, CBS, ABC, AMC,
  AnimalPlanet, BBCAmerica,
  Bravo, CartoonNetwork, CNBC,
  CNN, DestinationAmerica, DiscoveryChannel,
  DiscoveryFamily, Disney, DisneyJunior, DisneyXD,
  DIY, E, ESPN,
  ESPN2,
  FoodNetwork, FOXBusiness,
  FOXNews, Freeform, FOXSports1,
  FOXSports2, FX, FXX,
  HGTV,
  HLN, InvestigationDiscovery,
  MSNBC, NationalGeographic,
  NBCSportsNetwork,
  OWN, Oxygen, Pop, Sci,
  Syfy, TBS, Telemundo, TLC, TNT,
  TravelChannel, truTV, USA,
  WE
} = require('./util/channels')

const channels = [
  FOX, NBC, CBS, ABC, AMC,
  AnimalPlanet, BBCAmerica,
  Bravo, CartoonNetwork, CNBC,
  CNN, DestinationAmerica, DiscoveryChannel,
  DiscoveryFamily, Disney, DisneyJunior, DisneyXD,
  DIY, E, ESPN,
  ESPN2,
  FoodNetwork, FOXBusiness,
  FOXNews, Freeform, FOXSports1,
  FOXSports2, FX, FXX,
  HGTV,
  HLN, InvestigationDiscovery,
  MSNBC, NationalGeographic,
  NBCSportsNetwork,
  OWN, Oxygen, Pop, Sci,
  Syfy, TBS, Telemundo, TLC, TNT,
  TravelChannel, truTV, USA,
  WE
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('PlayStation Vue', 'Access Slim', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('PlayStation Vue', 'Access Slim')
  }
};
