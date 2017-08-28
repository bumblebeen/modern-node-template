'use strict';
module.exports = function(sequelize, DataTypes) {
  const SubTask = sequelize.define('SubTask', {
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    complete: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false
    },
  });

  SubTask.associate = (models) => {
    SubTask.belongsTo(models.Task, {
      foreignKey: 'taskId',
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });
  };

  return SubTask;
};