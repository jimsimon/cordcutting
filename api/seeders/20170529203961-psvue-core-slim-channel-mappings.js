'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'FOX', 'NBC', 'CBS', 'ABC', 'AMC',
  'Animal Planet', 'BBC America',
  'Bravo', 'Big Ten Network', 'Cartoon Network', 'CNBC',
  'CNN', 'Destination America', 'Discovery Channel',
  'Discovery Family', 'Disney', 'Disney Junior', 'Disney XD',
  'DIY', 'E!', 'ESPN',
  'ESPN2', 'ESPNews', 'ESPNU',
  'Food Network', 'FOX Business',
  'FOX News', 'FOX Sports (Regional)', 'Freeform', 'FOX Sports 1',
  'FOX Sports 2', 'FX', 'FXX',
  'Golf Channel', 'HGTV',
  'HLN', 'IFC', 'Investigation Discovery',
  'MLB Network', 'MSNBC', 'National Geographic',
  'NBA TV', 'NBC Sports Network', 'NFL Network',
  'OWN', 'Oxygen', 'Pop', 'Sci',
  'SEC Network', 'Sundance TV',
  'Syfy', 'TBS', 'Telemundo', 'TLC', 'TNT',
  'Travel Channel', 'truTV', 'TCM', 'USA',
  'WE'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('PlayStation Vue', 'Core Slim', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('PlayStation Vue', 'Core Slim')
  }
};
