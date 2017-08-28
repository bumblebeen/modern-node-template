'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('SubTasks', [{
      content: 'Study about Sequel Queries',
    }, {
      content: 'Study about Queries/ Mutations'
    }, {
      content: 'Create a simple express server'
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('SubTasks', null, {});
  }
};
