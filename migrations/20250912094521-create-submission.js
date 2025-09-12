'use strict';
/** @type {import('sequelize-cli').Migration} */
const { v4: uuidv4 } = require('uuid');
module.exports = {
 async up(queryInterface, Sequelize) {
  await queryInterface.createTable('Submissions', {
   id: {
    allowNull: false,
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
   },
   name: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: { isEmail: true },
   },
   phoneNumber: {
    type: Sequelize.STRING,
    allowNull: false,
   },
   imagePath: {
    type: Sequelize.STRING,
   },
   createdAt: {
    allowNull: false,
    type: Sequelize.DATE,
   },
   updatedAt: {
    allowNull: false,
    type: Sequelize.DATE,
   },
  });
 },
 async down(queryInterface, Sequelize) {
  await queryInterface.dropTable('Submissions');
 },
};
