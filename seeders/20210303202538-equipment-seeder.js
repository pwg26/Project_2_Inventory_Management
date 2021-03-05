'use strict';

const { assert } = require("console");
const { DEFAULT_MIN_VERSION } = require("tls");

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('equipment', [
       {
       name: 'Bulldozer',
       description: 'picks up dirt',
       asset_value: 10000,
       location: 'Denver',
       is_rented: true,
       company_renting: "Dave's truck stuff",
       rental_rate: 350,
       time_checked_out: new Date(),
       time_checked_in: null,
       realized_returns: null,
       createdAt: '2021-03-03 19:06:13',
       updatedAt: '2021-03-03 19:06:13'

      },
       {
       name: 'Skid steer',
       description: 'compaction of excavations',
       asset_value: 30000,
       location: 'Chicago',
       is_rented: false,
       company_renting: null,
       rental_rate: null,
       time_checked_out: null,
       time_checked_in: null,
       realized_returns: null,
       createdAt: '2021-03-03 19:06:13',
       updatedAt: '2021-03-03 19:06:13'

      },
       {
       name: 'Scissor lift',
       description: '19ft vertical personnel/equipment lift',
       asset_value: 9700,
       location: 'North Dakota',
       is_rented: true,
       company_renting: "Pete's Master Painting",
       rental_rate: 129,
       time_checked_out: new Date(),
       time_checked_in: new Date(),
       realized_returns: null,
       createdAt: '2021-03-03 19:06:13',
       updatedAt: '2021-03-03 19:06:13'

      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */


    // sequelize db:seed:all  
  }
};
