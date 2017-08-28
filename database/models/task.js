'use strict';
module.exports = (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Task.associate = (models) => {
    Task.hasMany(models.SubTask, {
      foreignKey: 'taskId',
      as: 'subTasks',
    });
  };
  return Task;
};