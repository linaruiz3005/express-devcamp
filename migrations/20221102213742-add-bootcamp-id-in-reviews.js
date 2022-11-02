'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //parametros
    //nombre de la tabla
    //nombre de la nueva columna
    //opciones de configuracion
   await queryInterface.addColumn('reviews' , 
   'bootcamp_id' , 
   {
     type:Sequelize.INTEGER,
     references:{
       model: 'bootcamps' ,
       key: 'id'
     },
     onUpdate:'CASCADE',
     onDelete: 'SET NULL'
   })
},

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('reviews' , 'bootcamp_id')
  }
};
