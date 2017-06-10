'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'A&E', 'ABC', 'AMC', 'Animal Planet', 'Audience', 'AXS TV', 'BabyFirst', 'BBC America', 'BET', 'Bloomberg TV', 'Bravo', 'C-SPAN',
  'C-SPAN2', 'Cartoon Network', 'CMT', 'CNBC', 'CNN', 'Comedy Central', 'Discovery Channel',
  'Disney', 'Disney Junior', 'Disney XD', 'E!', 'ESPN', 'ESPN2', 'Food Network', 'FOX', 'FOX Business', 'FOX News', 'FOX Sports (Regional)',
  'Freeform', 'FX', 'FXX', 'Galavision', 'Hallmark Channel', 'Hallmark M&M', 'HGTV', 'History Channel', 'HLN',
  'Investigation Discovery', 'Lifetime', 'MSNBC', 'MTV', 'MTV2', 'National Geographic', 'NBC',
  'Nick Jr.', 'Nickelodeon', 'RFD TV', 'Spike',
  'Syfy', 'TBS', 'TCM', 'TeenNick', 'Telemundo', 'TLC', 'TNT', 'truTV',
  'TV Land', 'Univision', 'USA', 'Velocity', 'VH1', 'Viceland', 'WE', 'WeatherNation'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('DirecTV Now', 'Live A Little', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('DirecTV Now', 'Live A Little')
  }
};
