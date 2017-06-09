'use strict';
const SeederUtil = require('./util/seeder-util')

const channels = [
  'ABC', 'CBS', 'FOX', 'NBC', 'CW', 'Telemundo',
  'ESPN', 'CSN (Regional)', 'FOX Sports (Regional)', 'FOX Sports 1', 'AMC', 'USA',
  'FX', 'Freeform', 'Disney', 'E!', 'ESPN2', 'FOX Sports 2',
  'Big Ten Network', 'SEC Network', 'ESPNU', 'ESPNews', 'Bravo', 'Oxygen',
  'IFC', 'FXX', 'NBC Universo', 'Syfy', 'Disney Junior', 'Disney XD',
  'Sprout', 'CBS Sports Network', 'NBC Sports Network', 'Golf', 'MSNBC', 'FOX News',
  'CNBC', 'FOX Business', 'SundanceTV', 'National Geographic', 'Nat Geo Wild', 'WE',
  'BBC America', 'FXM', 'Universal HD', 'Chiller', 'YouTube Red Originals'
]

module.exports = {
  up: async function (queryInterface, Sequelize) {
    await new SeederUtil().addChannelsToBundle('YouTube TV', 'Standard', channels)
  },

  down: async function (queryInterface, Sequelize) {
    await new SeederUtil().removeChannelsFromBundle('YouTube TV', 'Standard')
  }
};
