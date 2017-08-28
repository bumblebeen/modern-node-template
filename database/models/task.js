'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
        Task.hasMany(models.TodoItem, {
          foreignKey: 'taskId',
          as: 'subTasks',
        });
      }
    }
  });
  return Task;
};