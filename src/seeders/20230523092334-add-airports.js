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
    await queryInterface.bulkInsert("Airports", [
      {
        name: "Kempagoda Internation Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Chatrapati Shivaji Maharaj Internation Airport",
        cityId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Manguluru Internation Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Indira Gandhi Internation Airport",
        cityId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Mysuru Internation Airport",
        cityId: 3,
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
