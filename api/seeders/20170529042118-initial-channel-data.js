'use strict';

const { Channel } = require('../models/index')
const channels = [
  'ABC',
  'CBS',
  'FOX',
  'NBC',
  'ESPN',
  'AMC',
  'CNN',
  'HGTV',
  'Comedy Central',
  'Cartoon Network',
  'History Channel',
  'Disney Channel',
  'ESPN2',
  'ESPN3',
  'TNT',
  'Food Network',
  'TBS',
  'BBC America',
  'Freeform',
  'IFC',
  'A&E',
  'El Rey',
  'Viceland',
  'Lifetime',
  'Travel Channel',
  'AXS TV',
  'Newsy',
  'Cheddar',
  'Bloomberg Television',
  'Local Now',
  'Flama',
  'Galavisión',
  'FOX RSNs',
  'NBC RSNs',
  'NFL Network',
  'FX',
  'USA',
  'Bravo',
  'FOX Sports 1',
  'FOX Sports 2',
  'NBC Sports Network',
  'FXX',
  'Syfy',
  'Nick Jr.',
  'truTV',
  'BET',
  'National Geographic',
  'Nat Geo Wild',
  'Univision',
  'UniMás'
]

module.exports = {
  up: function (queryInterface, Sequelize) {
    return Channel.bulkCreate(channels.map(c => ({name: c})))
  },

  down: function (queryInterface, Sequelize) {
    return Channel.destroy({ where: { name: { $in: channels }}})
  }
}
