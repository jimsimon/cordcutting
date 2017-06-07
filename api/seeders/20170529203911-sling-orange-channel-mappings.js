'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'ESPN', 'AMC', 'CNN', 'HGTV', 'Comedy Central', 'Cartoon Network', 'History Channel',
  'Disney', 'ESPN2', 'ESPN3', 'TNT', 'Food Network', 'TBS', 'BBC America',
  'Freeform', 'IFC', 'Tribeca Shortlist', 'A&E', 'El Rey', 'Viceland',
  'Lifetime', 'Travel Channel', 'AXS TV', 'Newsy', 'Cheddar', 'Bloomberg Television', 'Local Now', 'Flama',
  'Galavisión'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('Orange', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('Orange', channels)
  }
};
