'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class PokerRoom extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      PokerRoom.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  PokerRoom.init(
    {
      userId: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.TEXT,
      },
      address: {
        type: DataTypes.TEXT,
      },
      city: {
        type: DataTypes.TEXT,
      },
      state: {
        type: DataTypes.TEXT,
      },
      zip: {
        type: DataTypes.INTEGER,
      },
      phone: {
        type: DataTypes.TEXT,
      },
      website: {
        type: DataTypes.TEXT,
      },
      image: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      }
    },
    {
    sequelize,
    modelName: 'PokerRoom',
  });
  return PokerRoom;
};
