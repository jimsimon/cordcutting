'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  FOX, NBC, CBS, ABC, AMC,
  AnimalPlanet, BBCAmerica,
  Bravo, BigTenNetwork, CartoonNetwork, CNBC,
  CNN, DestinationAmerica, DiscoveryChannel,
  DiscoveryFamily, Disney, DisneyJunior, DisneyXD,
  DIY, E, ESPN,
  ESPN2, ESPNews, ESPNU,
  FoodNetwork, FOXBusiness,
  FOXNews, FOXSportsRegional, Freeform, FOXSports1,
  FOXSports2, FX, FXX,
  GolfChannel, HGTV,
  HLN, IFC, InvestigationDiscovery,
  MLBNetwork, MSNBC, NationalGeographic,
  NBATV, NBCSportsNetwork, NFLNetwork,
  OWN, Oxygen, Pop, Sci,
  SECNetwork, SundanceTV,
  Syfy, TBS, Telemundo, TLC, TNT,
  TravelChannel, truTV, TCM, USA,
  WE
} = require('./util/channels')

const channels = [
  FOX, NBC, CBS, ABC, AMC,
  AnimalPlanet, BBCAmerica,
  Bravo, BigTenNetwork, CartoonNetwork, CNBC,
  CNN, DestinationAmerica, DiscoveryChannel,
  DiscoveryFamily, Disney, DisneyJunior, DisneyXD,
  DIY, E, ESPN,
  ESPN2, ESPNews, ESPNU,
  FoodNetwork, FOXBusiness,
  FOXNews, FOXSportsRegional, Freeform, FOXSports1,
  FOXSports2, FX, FXX,
  GolfChannel, HGTV,
  HLN, IFC, InvestigationDiscovery,
  MLBNetwork, MSNBC, NationalGeographic,
  NBATV, NBCSportsNetwork, NFLNetwork,
  OWN, Oxygen, Pop, Sci,
  SECNetwork, SundanceTV,
  Syfy, TBS, Telemundo, TLC, TNT,
  TravelChannel, truTV, TCM, USA,
  WE
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('PlayStation Vue', 'Core Slim', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('PlayStation Vue', 'Core Slim')
  }
};
