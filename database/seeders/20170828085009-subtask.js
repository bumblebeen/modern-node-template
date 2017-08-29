'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SubTasks', [{
      content: 'Study about Sequel Queries',
      taskId: 1
    }, {
      content: 'Study about Queries/ Mutations',
      taskId: 1
    }, {
      content: 'Create a simple express server',
      taskId: 2
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SubTasks', null, {});
  }
};
