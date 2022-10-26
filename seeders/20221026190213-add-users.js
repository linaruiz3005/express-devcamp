'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  await queryInterface.bulkInsert('users', [{
    username: 'John Doe',
    email:'lina@gmail.com',
    password: '123456' 
  },
  {
    username: 'Lina Ruiz',
    email:'linaruiz@gmail.com',
    password: '123' 
  },
  {
    username: 'Maria Palacio',
    email:'maria@gmail.com',
    password: '1234' 
  }
], {});
   
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
    
  }
};
