'use strict';
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('User', {
    email: DataTypes.STRING
  }, {
    timestamps: false
  });

  User.associate = (models) => {
    User.hasMany(models.Todo);
  };
  return User;
};