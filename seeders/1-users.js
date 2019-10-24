'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        email: 'palay@tes.com',
        password: 'palay007',
        name: 'Ilham Muhammad',
        image: 'https://ih0.redbubble.net/image.549381847.5604/pp,650x642-pad,750x1000,f8f8f8.jpg'
      },
      {
        email: 'budi@tes.com',
        password: 'palay007',
        name: 'Budi Santoso',
        image: 'https://giantbomb1.cbsistatic.com/uploads/scale_small/16/164924/3003266-4314677289-66101.jpg'
      },
      {
        email: 'tono@tes.com',
        password: 'palay007',
        name: 'Tono Sukirman',
        image: 'https://www.yorokondecosplay.com/5003-large_default/preorder-one-piece-roronoa-zoro-pop-sa-maximum-statue-18-figure-21-cm.jpg'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
