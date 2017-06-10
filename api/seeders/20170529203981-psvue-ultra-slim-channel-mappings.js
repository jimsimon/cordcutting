'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'FOX', 'NBC', 'CBS', 'ABC', 'AMC',
  'AHC', 'Animal Planet', 'BBC America', 'BBC World News', 'Boomerang',
  'Bravo', 'Big Ten Network', 'Cartoon Network', 'Chiller', 'CNBC',
  'CNBC World', 'CNN', 'Cooking Channel', 'Destination America', 'Discovery Channel',
  'Discovery Family', 'Discovery Life', 'Disney', 'Disney Junior', 'Disney XD',
  'DIY', 'E!', 'Epix Hits', 'ESPN', 'ESPN Deportes',
  'ESPN2', 'ESPNews', 'ESPNU', 'esportsTV', 'Esquire',
  'Food Network', 'FOX Business', 'FOX College Sports Atlantic', 'FOX College Sports Central', 'FOX College Sports Pacific',
  'FOX Deportes', 'FOX News', 'FOX Sports (Regional)', 'Freeform', 'Fox Sports 1',
  'FOX Sports 2', 'Fusion', 'FX', 'FXM', 'FXX',
  'GINX Esports TV', 'Golf', 'HBO', 'HGTV', 'Hi-Yah TV',
  'HLN', 'IFC', 'Impact', 'Investigation Discovery', 'Machinima',
  'MGM HD', 'MLB Network', 'MSNBC', 'Nat Geo Wild', 'National Geographic',
  'NBA TV', 'NBC Sports Network', 'NFL Network', 'Eleven Sports', 'Outside Television',
  'OWN', 'Oxygen', 'Polaris', 'Pop', 'Sci',
  'SEC Network', 'Showtime', 'Sony Movie Channel', 'Sprout', 'Sundance TV',
  'Syfy', 'TBS', 'Telemundo', 'TLC', 'TNT',
  'Travel Channel', 'truTV', 'TCM', 'Universal HD', 'USA',
  'Velocity', 'WE'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('PlayStation Vue', 'Ultra Slim', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('PlayStation Vue', 'Ultra Slim')
  }
};
