const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const Doctor = sequelize.define('doctor', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  fullname: { type: DataTypes.STRING},
  age: { type: DataTypes.INTEGER},
  city: { type: DataTypes.STRING},
  place_of_work: { type: DataTypes.STRING},
  position: { type: DataTypes.STRING},
  specialization: { type: DataTypes.STRING},
  phone: { type: DataTypes.STRING},
  email: {type: DataTypes.STRING, unique: true},
  password: {type: DataTypes.STRING},
});

module.exports = {
  Doctor
};