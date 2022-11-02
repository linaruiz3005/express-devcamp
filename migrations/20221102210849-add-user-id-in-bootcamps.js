'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    //parametros
    //nombre de la tabla
    //nombre de la nueva columna
    //opciones de configuracion
   await queryInterface.addColumn('bootcamps' , 
                                  'user_id' , 
                                  {
                                    type:Sequelize.INTEGER,
                                    references:{
                                      model: 'users' ,
                                      key: 'id'
                                    },
                                    onUpdate:'CASCADE',
                                    onDelete: 'SET NULL'
                                  })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('bootcamps' , 'user_id')
  }
};
