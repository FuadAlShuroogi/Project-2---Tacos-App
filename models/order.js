'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.order.belongsTo(models.user)
    }
  }
  order.init({
    items: DataTypes.JSON,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    paymentType: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    status: {type: DataTypes.STRING , defaultValue:'order_placed'}
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};