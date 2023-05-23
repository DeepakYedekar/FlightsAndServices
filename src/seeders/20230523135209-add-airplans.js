'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    
     await queryInterface.bulkInsert("Airplanes", [
       {
         modelNumber: "Airbus A320",
         capacity: 350,
         updatedAt: new Date()
       },
       {
         modelNumber: "Boeing 777",
         capacity: 400,
         createdAt: new Date(),
         updatedAt: new Date()
       },
        {
         modelNumber: "Airbus 330",
         capacity: 320,
         createdAt: new Date(),
         updatedAt: new Date()
       },
         {
         modelNumber: "Airbus 320",
         capacity: 300,
         createdAt: new Date(),
         updatedAt: new Date()
       }
     ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
