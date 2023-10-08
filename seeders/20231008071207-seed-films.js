'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Films', [
      {
       name: 'Titanic',
       description: 'Lorem ipsum do color',
       year: '2001',
       author: 'JK Rowling',
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'Spongebob',
        description: 'Lorem ipsum do color',
        year: '2001',
        author: 'JK Rowling',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Titanic 2',
        description: 'Lorem ipsum do color',
        year: '2001',
        author: 'JK Rowling',
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Titanic 3',
        description: 'Lorem ipsum do color',
        year: '2001',
        author: 'JK Rowling',
        createdAt: new Date(),
        updatedAt: new Date()
       }
    ], {});
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
