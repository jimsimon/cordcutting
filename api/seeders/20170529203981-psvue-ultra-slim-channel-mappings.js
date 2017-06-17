'use strict';
const SeederUtil = require('./util/seeder-util')

const {
  FOX, NBC, CBS, ABC, AMC,
  AHC, AnimalPlanet, BBCAmerica, BBCWorldNews, Boomerang,
  Bravo, BigTenNetwork, CartoonNetwork, Chiller, CNBC,
  CNBCWorld, CNN, CookingChannel, DestinationAmerica, DiscoveryChannel,
  DiscoveryFamily, DiscoveryLife, Disney, DisneyJunior, DisneyXD,
  DIY, E, EpixHits, ESPN, ESPNDeportes,
  ESPN2, ESPNews, ESPNU, esportsTV, Esquire,
  FoodNetwork, FOXBusiness, FOXCollegeSportsAtlantic, FOXCollegeSportsCentral, FOXCollegeSportsPacific,
  FOXDeportes, FOXNews, FOXSportsRegional, Freeform, FOXSports1,
  FOXSports2, Fusion, FX, FXM, FXX,
  GINXEsportsTV, GolfChannel, HBO, HGTV, HiYahTV,
  HLN, IFC, Impact, InvestigationDiscovery, Machinima,
  MGMHD, MLBNetwork, MSNBC, NatGeoWild, NationalGeographic,
  NBATV, NBCSportsNetwork, NFLNetwork, ElevenSports, OutsideTelevision,
  OWN, Oxygen, Polaris, Pop, Sci,
  SECNetwork, Showtime, SonyMovieChannel, Sprout, SundanceTV,
  Syfy, TBS, Telemundo, TLC, TNT,
  TravelChannel, truTV, TCM, UniversalHD, USA,
  Velocity, WE
} = require('./util/channels')

const channels = [
  FOX, NBC, CBS, ABC, AMC,
  AHC, AnimalPlanet, BBCAmerica, BBCWorldNews, Boomerang,
  Bravo, BigTenNetwork, CartoonNetwork, Chiller, CNBC,
  CNBCWorld, CNN, CookingChannel, DestinationAmerica, DiscoveryChannel,
  DiscoveryFamily, DiscoveryLife, Disney, DisneyJunior, DisneyXD,
  DIY, E, EpixHits, ESPN, ESPNDeportes,
  ESPN2, ESPNews, ESPNU, esportsTV, Esquire,
  FoodNetwork, FOXBusiness, FOXCollegeSportsAtlantic, FOXCollegeSportsCentral, FOXCollegeSportsPacific,
  FOXDeportes, FOXNews, FOXSportsRegional, Freeform, FOXSports1,
  FOXSports2, Fusion, FX, FXM, FXX,
  GINXEsportsTV, GolfChannel, HBO, HGTV, HiYahTV,
  HLN, IFC, Impact, InvestigationDiscovery, Machinima,
  MGMHD, MLBNetwork, MSNBC, NatGeoWild, NationalGeographic,
  NBATV, NBCSportsNetwork, NFLNetwork, ElevenSports, OutsideTelevision,
  OWN, Oxygen, Polaris, Pop, Sci,
  SECNetwork, Showtime, SonyMovieChannel, Sprout, SundanceTV,
  Syfy, TBS, Telemundo, TLC, TNT,
  TravelChannel, truTV, TCM, UniversalHD, USA,
  Velocity, WE
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('PlayStation Vue', 'Ultra Slim', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('PlayStation Vue', 'Ultra Slim')
  }
};
