'use strict';

const { assert } = require("console");
const { DEFAULT_MIN_VERSION } = require("tls");

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('Equipments', [{
       name: 'Bulldozer',
       description: 'picks up dirt',
       asset_value: 10000,
       is_rented: true,
       rented_location: 'Denver',
       company_renting: 'Daves truck stuff',
       rental_rate: 100,
       realized_returns: null,
       time_checked_out: new Date(),
       time_checked_in: new Date()

      }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
