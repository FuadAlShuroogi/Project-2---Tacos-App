'use strict';
const {
  Model, INTEGER, Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  menu.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: {type:Sequelize.INTEGER},
  }, {
    sequelize,
    modelName: 'menu',
  });
  return menu;
};