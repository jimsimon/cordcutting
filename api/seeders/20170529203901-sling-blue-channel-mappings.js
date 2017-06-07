'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'AMC', 'CNN', 'HGTV', 'Comedy Central', 'Cartoon Network',
  'History Channel', 'TNT', 'Food Network', 'TBS', 'BBC America', 'IFC', 'Tribeca Shortlist',
  'A&E', 'El Rey', 'Viceland', 'Lifetime', 'Travel Channel', 'AXS TV', 'Newsy', 'Cheddar',
  'Bloomberg Television', 'Local Now', 'Flama', 'Galavisión', 'FOX', 'NBC', 'FOX Sports (Regional)',
  'CSN (Regional)', 'NFL Network', 'FX', 'USA', 'Bravo', 'FOX Sports 1', 'FOX Sports 2',
  'NBC Sports Network', 'FXX', 'Syfy', 'Nick Jr.', 'truTV', 'BET', 'National Geographic',
  'Nat Geo Wild', 'Univision', 'UniMás'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('Blue', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('Blue', channels)
  }
};
