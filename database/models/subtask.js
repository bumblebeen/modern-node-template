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
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        SubTask.belongsTo(models.Task, {
          foreignKey: 'todoId',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        });
      }
    }
  });
  return SubTask;
};