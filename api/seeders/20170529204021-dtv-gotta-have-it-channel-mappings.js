'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'A&E', 'ABC', 'AMC', 'Animal Planet', 'Audience', 'AXS TV', 'BabyFirst', 'BBC America', 'BBC World News', 'BET', 'Boomerang', 'Bloomberg TV', 'Bravo', 'Big Ten Network', 'C-SPAN',
  'C-SPAN2', 'Cartoon Network', 'Centric', 'Chiller', 'CMT', 'CNBC', 'CNBC World', 'CNN', 'Comedy Central', 'Comedy.TV', 'Cooking Channel', 'Destination America', 'Discovery Channel', 'Discovery Family', 'Discovery Life',
  'Disney', 'Disney Junior', 'Disney XD', 'DIY', 'E!', 'El Rey', 'ESPN', 'ESPN2', 'ESPNews', 'ESPNU', 'FM', 'Food Network', 'FOX', 'FOX Business', 'FOX News', 'FOX Sports (Regional)',
  'FOX Sports 2', 'Freeform', 'Fuse', 'Fusion', 'FX', 'FXM', 'FXX', 'FYI', 'Galavisión', 'Golf Channel', 'GSN', 'Hallmark Channel', 'HGTV', 'History Channel', 'HLN',
  'IFC', 'Investigation Discovery', 'Justice Channel', 'Lifetime', 'LMN', 'Logo', 'MLB Network', 'MSNBC', 'MTV', 'MTV Classic', 'MTV2', 'Nat Geo Wild', 'National Geographic', 'NBA TV', 'NBC', 'NBC Sports Network',
  'NBC Universo', 'NHL Network', 'Nick Jr.', 'Nickelodeon', 'Nicktoons', 'OWN', 'Oxygen', 'Revolt', 'RFD TV', 'Sci', 'SEC Network', 'Spike', 'Sprout', 'Starz Encore Action', 'Starz Encore Black', 'Starz East',
  'Starz Encore Family', 'Starz Encore Classic', 'Starz Encore Suspense', 'Starz Encore West', 'Starz Encore Westerns', 'Sundance TV', 'Syfy', 'TBS', 'TCM', 'TeenNick', 'Telemundo', 'Tennis Channel', 'TLC', 'TNT', 'Travel Channel', 'truTV',
  'TV Land', 'TVG', 'UniMás', 'Univision', 'Univision Deportes', 'USA', 'Velocity', 'VH1', 'Viceland', 'WE', 'The Weather Channel', 'WeatherNation'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('DirecTV Now', 'Gotta Have It', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('DirecTV Now', 'Gotta Have It')
  }
};
