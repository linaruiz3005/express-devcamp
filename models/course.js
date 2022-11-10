'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Course.init({
    title: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
      notEmpty:{
        args:true,
        msg:"title no debe estar vacio"
      },
      notNull:{
        args:true,
        msg:"title no presente"
      }
      }
    },
    description: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
      notEmpty:{
        args:true,
        msg:"description no debe estar vacio"
      },
      notNull:{
        args:true,
        msg:"description no presente"
      }
      }
    },
    weeks: {
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
      max: 9,
      notEmpty:{
        args:true,
        msg:"weeks no debe estar vacio"
      },
      notNull:{
        args:true,
        msg:"weeks no presente"
      }
      
      }
    },
    enroll_cost: {
      type:DataTypes.FLOAT,
      allowNull: false,
      validate:{
      notEmpty:{
        args:true,
        msg:"enroll_cost no debe estar vacio"
      },
      notNull:{
        args:true,
        msg:"enroll_cost no presente"
      }
      }
    },
    minimum_skill: {
      type:DataTypes.STRING,
      allowNull: false,
      validate:{
      notEmpty:{
        args:true,
        msg:"minimum_skill no debe estar vacio"
      },
      notNull:{
        args:true,
        msg:"minimum_skill no presente"
      }
      }
    },
    bootcamp_id: DataTypes.INTEGER
  }, {
    sequelize,
    timestamps:false,
    modelName: 'Course',
  });
  return Course;
};