'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'palay@tes.com',
        password: 'palay007',
        name: 'Ilham Muhammad',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
        email: 'budi@tes.com',
        password: 'palay007',
        name: 'Budi Santoso',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
      {
        email: 'tono@tes.com',
        password: 'palay007',
        name: 'Tono Sukirman',
        // createdAt: new Date(),
        // updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
