'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'ABC', 'CBS', 'FOX', 'NBC', 'A&E', 'Big Ten Network', 'Boomerang',
  'Bravo', 'Cartoon Network', 'CBS Sports Network', 'Chiller', 'CNBC', 'CNN', 'CNN International',
  'Disney', 'Disney Junior', 'Disney XD', 'E!', 'ESPN', 'ESPN2', 'ESPNews',
  'ESPNU', 'Food Network', 'FOX Business', 'FOX News', 'FOX Sports 1', 'FOX Sports 2', 'Freeform',
  'FX', 'FXM', 'FXX', 'FYI', 'Golf', 'HGTV', 'History Channel',
  'HLN', 'Lifetime', 'LMN', 'MSNBC', 'National Geographic', 'Nat Geo Wild', 'NBC Sports Network',
  'Oxygen', 'Pop', 'SEC Network', 'Sprout', 'Syfy', 'TBS', 'TCM',
  'TNT', 'Travel Channel', 'truTV', 'USA', 'Viceland'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('Hulu Live', 'Standard', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('Hulu Live', 'Standard')
  }
};
