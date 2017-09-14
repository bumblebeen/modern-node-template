'use strict';
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: DataTypes.STRING,
    complete: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  }, {
    timestamps: false
  });

  Todo.associate = (models) => {
    Todo.belongsTo(models.User);
  };
  return Todo;
};