'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PokerRooms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      name: {
        type: Sequelize.STRING(30)
      },
      address: {
        type: Sequelize.STRING(30)
      },
      city: {
        type: Sequelize.STRING(30)
      },
      state: {
        type: Sequelize.STRING(30)
      },
      zip: {
        type: Sequelize.STRING(30)
      },
      phone: {
        type: Sequelize.STRING(30)
      },
      website: {
        type: Sequelize.STRING(30)
      },
      image: {
        type: Sequelize.STRING(30)
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PokerRooms');
  }
};
