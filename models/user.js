'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    resetToken: DataTypes.STRING,
    resetTokenExpiration: DataTypes.DATE
  }, {});
  User.associate = function (models) {
    User.hasMany(models.Record)
  };
  return User;
};