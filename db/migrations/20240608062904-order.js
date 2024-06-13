'use strict';

const { DataTypes, Sequelize } = require('sequelize');
const { ORDER_TABLE } = require('./../models/order.model');
const { CUSTOMER_TABLE } = require('../models/customer.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.createTable(ORDER_TABLE, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      createdAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW,
      },
      customerId: {
        field: 'customer_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: CUSTOMER_TABLE,
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable(ORDER_TABLE);
  },
};
