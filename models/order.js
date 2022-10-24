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
    }
  }
  order.init({
    customerId: {
      type: DataTypes.STRING,
      ref: 'User',
      },
    items: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    paymenttype: DataTypes.STRING,
    paymentstatus: DataTypes.BOOLEAN,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};