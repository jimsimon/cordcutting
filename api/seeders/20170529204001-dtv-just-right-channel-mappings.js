'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'A&E', 'ABC', 'AMC', 'Animal Planet', 'Audience', 'AXS TV', 'BabyFirst', 'BBC America', 'BET', 'Bloomberg TV', 'Bravo', 'Big Ten Network', 'C-SPAN',
  'C-SPAN2', 'Cartoon Network', 'CMT', 'CNBC', 'CNBC World', 'CNN', 'Comedy Central', 'Comedy.TV', 'Cooking Channel', 'Discovery Channel',
  'Disney', 'Disney Junior', 'Disney XD', 'E!', 'ESPN', 'ESPN2', 'ESPNews', 'ESPNU', 'Food Network', 'FOX', 'FOX Business', 'FOX News', 'FOX Sports (Regional)',
  'Freeform', 'Fuse', 'Fusion', 'FX', 'FXX', 'Galavisión', 'GSN', 'Hallmark Channel', 'HGTV', 'History Channel', 'HLN',
  'IFC', 'Investigation Discovery', 'Justice Channel', 'Lifetime', 'MLB Network', 'MSNBC', 'MTV', 'MTV2', 'National Geographic', 'NBC', 'NBC Sports Network',
  'Nick Jr.', 'Nickelodeon', 'Nicktoons', 'OWN', 'RFD TV', 'Sci', 'SEC Network', 'Spike',
  'Sundance TV', 'Syfy', 'TBS', 'TCM', 'TeenNick', 'Telemundo', 'Tennis Channel', 'TLC', 'TNT', 'Travel Channel', 'truTV',
  'TV Land', 'UniMás', 'Univision', 'USA', 'Velocity', 'VH1', 'Viceland', 'WE', 'The Weather Channel', 'WeatherNation'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('DirecTV Now', 'Just Right', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('DirecTV Now', 'Just Right')
  }
};
