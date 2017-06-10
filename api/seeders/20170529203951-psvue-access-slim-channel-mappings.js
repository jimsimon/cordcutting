'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'FOX', 'NBC', 'CBS', 'ABC', 'AMC',
  'Animal Planet', 'BBC America',
  'Bravo', 'Cartoon Network', 'CNBC',
  'CNN', 'Destination America', 'Discovery Channel',
  'Discovery Family', 'Disney', 'Disney Junior', 'Disney XD',
  'DIY', 'E!', 'ESPN',
  'ESPN2',
  'Food Network', 'FOX Business',
  'FOX News', 'Freeform', 'Fox Sports 1',
  'FOX Sports 2', 'FX', 'FXX',
  'HGTV',
  'HLN', 'Investigation Discovery',
  'MSNBC', 'National Geographic',
  'NBC Sports Network',
  'OWN', 'Oxygen', 'Pop', 'Sci',
  'Syfy', 'TBS', 'Telemundo', 'TLC', 'TNT',
  'Travel Channel', 'truTV', 'USA',
  'WE'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('PlayStation Vue', 'Access Slim', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('PlayStation Vue', 'Access Slim')
  }
};
