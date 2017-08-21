'use strict'
const {
  AMC, CNN, HGTV, ComedyCentral, CartoonNetwork, HistoryChannel, TNT, FoodNetwork, TBS, BBCAmerica, IFC,
  TribecaShortlist, AE, ElRey, Viceland, Lifetime, TravelChannel, AXSTV, Newsy, Cheddar, LocalNow, Flama, Galavision,
  FOX, NBC, FOXSportsRegional, CSNRegional, NFLNetwork, FX, USA, Bravo, FOXSports1, FOXSports2, NBCSportsNetwork, FXX,
  Syfy, NickJr, truTV, BET, NationalGeographic, NatGeoWild, Univision, UniMas, ESPN, Disney, ESPN2, ESPN3, Freeform,
  ABC, CBS, BigTenNetwork, Boomerang, CBSSportsNetwork, Chiller, CNBC, CNNInternational, DisneyJunior, DisneyXD, E,
  ESPNews, ESPNU, FOXBusiness, FOXNews, FXM, FYI, HLN, LMN, MSNBC, Oxygen, Pop, SECNetwork, Sprout, TCM, CW, Telemundo,
  NBCUniverso, SundanceTV, WE, UniversalHD, YouTubeRedOriginals, AnimalPlanet, DestinationAmerica, DiscoveryChannel,
  DiscoveryFamily, DIY, InvestigationDiscovery, OWN, Sci, TLC, MLBNetwork, NBATV, AHC, BBCWorldNews, CNBCWorld,
  CookingChannel, DiscoveryLife, EpixHits, ESPNDeportes, esportsTV, Esquire, FOXCollegeSportsAtlantic,
  FOXCollegeSportsCentral, FOXCollegeSportsPacific, FOXDeportes, Fusion, GINXEsportsTV, HiYahTV, Impact, Machinima,
  MGMHD, ElevenSports, OutsideTelevision, Polaris, SonyMovieChannel, Velocity, HBO, Showtime, Audience, BabyFirst,
  BloombergTV, CSPAN, CSPAN2, CMT, HallmarkChannel, HallmarkMM, MTV, MTV2, Nickelodeon, RFDTV, Spike, TeenNick, TVLand,
  VH1, WeatherNation, ComedyTV, Fuse, GSN, JusticeChannel, Nicktoons, TennisChannel, TheWeatherChannel, Centric, FM,
  GolfChannel, Logo, MTVClassic, NHLNetwork, Revolt, TVG, StarzEncoreAction, StarzEncoreBlack, StarzEast,
  StarzEncoreFamily, StarzEncoreClassic, StarzEncoreSuspense, StarzEncoreWest, StarzEncoreWesterns, UnivisionDeportes
} = require('./util/channel-names.json')

function createTable(queryInterface, Sequelize) {
  return queryInterface.createTable('channels', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    categoryId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING
    },
    useNameForDisplay: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: true
    },
    abbreviation: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      defaultValue: new Date(),
      type: Sequelize.DATE
    }
  })
}

async function insertChannels(queryInterface, categoryId, channelNames) {
  const channels = channelNames.map(c => {
    return {
      name: c,
      abbreviation: null,
      categoryId
    }
  })
  await queryInterface.bulkInsert('channels', channels)
}

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await createTable(queryInterface, Sequelize)
    const categories = await queryInterface.sequelize.query('SELECT id, name FROM categories', {type: Sequelize.QueryTypes.SELECT})
    const categoryNameToIdMap = categories.reduce((map, category) => Object.assign(map, {[category.name]: category.id}), {})
    await insertChannels(queryInterface, categoryNameToIdMap["Local"], [ABC, CBS, FOX, NBC, CW, LocalNow])
    await insertChannels(queryInterface, categoryNameToIdMap["Entertainment"], [AMC, ComedyCentral, HistoryChannel, TNT, TBS, BBCAmerica, TribecaShortlist, AE, E, FX, USA, Syfy, truTV, NationalGeographic, NatGeoWild, Freeform, ElRey, Viceland, AXSTV, IFC, Galavision, Flama, Bravo, FXX, BET, Univision, UnivisionDeportes, UniMas, Chiller, FXM, FYI, HLN, LMN, Oxygen, Pop, TCM, Telemundo, NBCUniverso, SundanceTV, WE, UniversalHD, YouTubeRedOriginals, AnimalPlanet, DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DIY, InvestigationDiscovery, OWN, Sci, TLC, Esquire, DiscoveryLife, EpixHits, AHC, Fusion, Fuse, HiYahTV, Impact, Machinima, MGMHD, Polaris, SonyMovieChannel, Velocity, Audience, CMT, HallmarkChannel, HallmarkMM, MTV, MTV2, RFDTV, Spike, TVLand, VH1, ComedyTV, GSN, JusticeChannel, Centric, FM, Logo, MTVClassic, Revolt])
    await insertChannels(queryInterface, categoryNameToIdMap["Financial"], [CNBCWorld, FOXBusiness, CNBC, BloombergTV, Cheddar])
    await insertChannels(queryInterface, categoryNameToIdMap["Premium"], [HBO, Showtime, StarzEast, StarzEncoreAction, StarzEncoreSuspense, StarzEncoreBlack, StarzEncoreWest, StarzEncoreClassic, StarzEncoreFamily, StarzEncoreWesterns])
    await insertChannels(queryInterface, categoryNameToIdMap["Sports"], [FOXCollegeSportsCentral, CBSSportsNetwork, ESPNDeportes, NFLNetwork, GolfChannel, TVG, FOXCollegeSportsPacific, NBCSportsNetwork, ESPNews, NHLNetwork, GINXEsportsTV, FOXSports1, FOXSportsRegional, ESPN2, SECNetwork, BigTenNetwork, ElevenSports, FOXCollegeSportsAtlantic, CSNRegional, ESPN3, NBATV, TennisChannel, FOXDeportes, FOXSports2, ESPN, ESPNU, MLBNetwork, esportsTV])
    await insertChannels(queryInterface, categoryNameToIdMap["Lifestyle"], [HGTV, FoodNetwork, Lifetime, TravelChannel, CookingChannel, OutsideTelevision])
    await insertChannels(queryInterface, categoryNameToIdMap["Kids"], [CartoonNetwork, Nickelodeon, NickJr, Nicktoons, TeenNick, Boomerang, Sprout, Disney, DisneyJunior, DisneyXD, BabyFirst])
    await insertChannels(queryInterface, categoryNameToIdMap["News and Weather"], [MSNBC, Newsy, CSPAN, CNN, BBCWorldNews, TheWeatherChannel, CSPAN2, FOXNews, CNNInternational, WeatherNation])
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('channels')
  }
}
