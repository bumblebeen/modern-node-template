'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  });

  User.associate = (models) => {
    User.hasMany(models.Todo);
  };
  return User;
};