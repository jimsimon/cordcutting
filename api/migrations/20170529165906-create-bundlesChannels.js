'use strict';

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

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await createTable(queryInterface, Sequelize)

    const records = await queryInterface.sequelize.query(
      'SELECT b.id, p.name as "providerName", b.name as "bundleName" FROM providers p inner join bundles b on p.id = b."providerId"',
      {type: Sequelize.QueryTypes.SELECT}
    )
    const bundleNameToIdMap = records.reduce((map, record) => Object.assign(map, {[`${record.providerName} ${record.bundleName}`]: record.id}), {})

    const channels = await queryInterface.sequelize.query('SELECT id, name FROM channels', {type: Sequelize.QueryTypes.SELECT})
    const channelNameToIdMap = channels.reduce((map, channel) => Object.assign(map, {[channel.name]: channel.id}), {})

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['Sling TV Blue'], channelNameToIdMap, [
      AMC, CNN, HGTV, ComedyCentral, CartoonNetwork,
      HistoryChannel, TNT, FoodNetwork, TBS, BBCAmerica, IFC, TribecaShortlist,
      AE, ElRey, Viceland, Lifetime, TravelChannel, AXSTV, Newsy, Cheddar,
      BloombergTV, LocalNow, Flama, Galavision, FOX, NBC, FOXSportsRegional,
      CSNRegional, NFLNetwork, FX, USA, Bravo, FOXSports1, FOXSports2,
      NBCSportsNetwork, FXX, Syfy, NickJr, truTV, BET, NationalGeographic,
      NatGeoWild, Univision, UniMas
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['Sling TV Orange'], channelNameToIdMap, [
      ESPN, AMC, CNN, HGTV, ComedyCentral, CartoonNetwork, HistoryChannel,
      Disney, ESPN2, ESPN3, TNT, FoodNetwork, TBS, BBCAmerica,
      Freeform, IFC, TribecaShortlist, AE, ElRey, Viceland,
      Lifetime, TravelChannel, AXSTV, Newsy, Cheddar, BloombergTV, LocalNow, Flama,
      Galavision
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['Sling TV Orange + Blue'], channelNameToIdMap, [
      AMC, CNN, HGTV, ComedyCentral, CartoonNetwork,
      HistoryChannel, TNT, FoodNetwork, TBS, BBCAmerica, IFC, TribecaShortlist,
      AE, ElRey, Viceland, Lifetime, TravelChannel, AXSTV, Newsy, Cheddar,
      BloombergTV, LocalNow, Flama, Galavision, FOX, NBC, FOXSportsRegional,
      CSNRegional, NFLNetwork, FX, USA, Bravo, FOXSports1, FOXSports2,
      NBCSportsNetwork, FXX, Syfy, NickJr, truTV, BET, NationalGeographic,
      NatGeoWild, Univision, UniMas,
      ESPN, Disney, ESPN2, ESPN3, Freeform
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['Hulu Live Standard'], channelNameToIdMap, [
      ABC, CBS, FOX, NBC, AE, BigTenNetwork, Boomerang,
      Bravo, CartoonNetwork, CBSSportsNetwork, Chiller, CNBC, CNN, CNNInternational,
      Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, ESPNews,
      ESPNU, FoodNetwork, FOXBusiness, FOXNews, FOXSports1, FOXSports2, Freeform,
      FX, FXM, FXX, FYI, GolfChannel, HGTV, HistoryChannel,
      HLN, Lifetime, LMN, MSNBC, NationalGeographic, NatGeoWild, NBCSportsNetwork,
      Oxygen, Pop, SECNetwork, Sprout, Syfy, TBS, TCM,
      TNT, TravelChannel, truTV, USA, Viceland
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['YouTube TV Standard'], channelNameToIdMap, [
      ABC, CBS, FOX, NBC, CW, Telemundo,
      ESPN, CSNRegional, FOXSportsRegional, FOXSports1, AMC, USA,
      FX, Freeform, Disney, E, ESPN2, FOXSports2,
      BigTenNetwork, SECNetwork, ESPNU, ESPNews, Bravo, Oxygen,
      IFC, FXX, NBCUniverso, Syfy, DisneyJunior, DisneyXD,
      Sprout, CBSSportsNetwork, NBCSportsNetwork, GolfChannel, MSNBC, FOXNews,
      CNBC, FOXBusiness, SundanceTV, NationalGeographic, NatGeoWild, WE,
      BBCAmerica, FXM, UniversalHD, Chiller, YouTubeRedOriginals
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['PlayStation Vue Access Slim'], channelNameToIdMap, [
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
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['PlayStation Vue Core Slim'], channelNameToIdMap, [
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
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['PlayStation Vue Elite Slim'], channelNameToIdMap, [
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
      GINXEsportsTV, GolfChannel, HGTV, HiYahTV,
      HLN, IFC, Impact, InvestigationDiscovery, Machinima,
      MGMHD, MLBNetwork, MSNBC, NatGeoWild, NationalGeographic,
      NBATV, NBCSportsNetwork, NFLNetwork, ElevenSports, OutsideTelevision,
      OWN, Oxygen, Polaris, Pop, Sci,
      SECNetwork, SonyMovieChannel, Sprout, SundanceTV,
      Syfy, TBS, Telemundo, TLC, TNT,
      TravelChannel, truTV, TCM, UniversalHD, USA,
      Velocity, WE
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['PlayStation Vue Ultra Slim'], channelNameToIdMap, [
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
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['DirecTV Now Live A Little'], channelNameToIdMap, [
      AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BET, BloombergTV, Bravo, CSPAN,
      CSPAN2, CartoonNetwork, CMT, CNBC, CNN, ComedyCentral, DiscoveryChannel,
      Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
      Freeform, FX, FXX, Galavision, HallmarkChannel, HallmarkMM, HGTV, HistoryChannel, HLN,
      InvestigationDiscovery, Lifetime, MSNBC, MTV, MTV2, NationalGeographic, NBC,
      NickJr, Nickelodeon, RFDTV, Spike,
      Syfy, TBS, TCM, TeenNick, Telemundo, TLC, TNT, truTV,
      TVLand, Univision, USA, Velocity, VH1, Viceland, WE, WeatherNation
    ])
    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['DirecTV Now Just Right'], channelNameToIdMap, [
      AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BET, BloombergTV, Bravo, BigTenNetwork, CSPAN,
      CSPAN2, CartoonNetwork, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DiscoveryChannel,
      Disney, DisneyJunior, DisneyXD, E, ESPN, ESPN2, ESPNews, ESPNU, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
      Freeform, Fuse, Fusion, FX, FXX, Galavision, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
      IFC, InvestigationDiscovery, JusticeChannel, Lifetime, MLBNetwork, MSNBC, MTV, MTV2, NationalGeographic, NBC, NBCSportsNetwork,
      NickJr, Nickelodeon, Nicktoons, OWN, RFDTV, Sci, SECNetwork, Spike,
      SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
      TVLand, UniMas, Univision, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['DirecTV Now Go Big'], channelNameToIdMap, [
      AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BBCWorldNews, BET, BloombergTV, Bravo, BigTenNetwork, CSPAN,
      CSPAN2, CartoonNetwork, Centric, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DiscoveryLife,
      Disney, DisneyJunior, DisneyXD, DIY, E, ESPN, ESPN2, ESPNews, ESPNU, FM, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
      FOXSports2, Freeform, Fuse, Fusion, FX, FXM, FXX, FYI, Galavision, GolfChannel, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
      IFC, InvestigationDiscovery, JusticeChannel, Lifetime, LMN, Logo, MLBNetwork, MSNBC, MTV, MTVClassic, MTV2, NatGeoWild, NationalGeographic, NBATV, NBC, NBCSportsNetwork,
      NBCUniverso, NHLNetwork, NickJr, Nickelodeon, Nicktoons, OWN, Oxygen, Revolt, RFDTV, Sci, SECNetwork, Spike, Sprout,
      SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
      TVLand, TVG, UniMas, Univision, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
    ])

    await insertBundleChannelMappings(queryInterface, bundleNameToIdMap['DirecTV Now Gotta Have It'], channelNameToIdMap, [
      AE, ABC, AMC, AnimalPlanet, Audience, AXSTV, BabyFirst, BBCAmerica, BBCWorldNews, BET, Boomerang, BloombergTV, Bravo, BigTenNetwork, CSPAN,
      CSPAN2, CartoonNetwork, Centric, Chiller, CMT, CNBC, CNBCWorld, CNN, ComedyCentral, ComedyTV, CookingChannel, DestinationAmerica, DiscoveryChannel, DiscoveryFamily, DiscoveryLife,
      Disney, DisneyJunior, DisneyXD, DIY, E, ElRey, ESPN, ESPN2, ESPNews, ESPNU, FM, FoodNetwork, FOX, FOXBusiness, FOXNews, FOXSportsRegional,
      FOXSports2, Freeform, Fuse, Fusion, FX, FXM, FXX, FYI, Galavision, GolfChannel, GSN, HallmarkChannel, HGTV, HistoryChannel, HLN,
      IFC, InvestigationDiscovery, JusticeChannel, Lifetime, LMN, Logo, MLBNetwork, MSNBC, MTV, MTVClassic, MTV2, NatGeoWild, NationalGeographic, NBATV, NBC, NBCSportsNetwork,
      NBCUniverso, NHLNetwork, NickJr, Nickelodeon, Nicktoons, OWN, Oxygen, Revolt, RFDTV, Sci, SECNetwork, Spike, Sprout, StarzEncoreAction, StarzEncoreBlack, StarzEast,
      StarzEncoreFamily, StarzEncoreClassic, StarzEncoreSuspense, StarzEncoreWest, StarzEncoreWesterns, SundanceTV, Syfy, TBS, TCM, TeenNick, Telemundo, TennisChannel, TLC, TNT, TravelChannel, truTV,
      TVLand, TVG, UniMas, Univision, UnivisionDeportes, USA, Velocity, VH1, Viceland, WE, TheWeatherChannel, WeatherNation
    ])
  },
  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('bundlesChannels');
  }
};

async function insertBundleChannelMappings (queryInterface, bundleId, channeNameToIdMap, channels) {
  const bundlesChannels = channels.map(function (channel) {
    return {
      bundleId,
      channelId: channeNameToIdMap[channel]
    }
  })

  return queryInterface.bulkInsert('bundlesChannels', bundlesChannels)
}

function createTable (queryInterface, Sequelize) {
  return queryInterface.createTable('bundlesChannels', {
    bundleId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'bundles',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    channelId: {
      type: Sequelize.INTEGER,
      references: {
        model: 'channels',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
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
  }).then(function () {
    return Promise.all([
      queryInterface.addIndex(
        'bundlesChannels',
        ['bundleId', 'channelId'],
        {
          indexName: 'bundlesChannelsCompositeIndex',
          indicesType: 'UNIQUE'
        }
      ),
      queryInterface.addIndex(
        'bundlesChannels',
        ['channelId'],
        {
          indexName: 'bundlesChannelsChannelIndex'
        }
      )
    ])
  })
}
