'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER
  });

  Todo.associate = (models) => {
    Todo.belongsTo(models.User);
  };
  return Todo;
};