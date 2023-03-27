'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    return queryInterface.bulkInsert(options, [
      {
        id: 1,
        userId: 1,
        content: 'This is a test review 1 for the demo user',
      },
      {
        id: 2,
        userId: 1,
        content: 'This is a test review 2 for the demo user',
      },
      {
        id: 3,
        userId: 1,
        content: 'This is a test review 3 for the demo user',
      },
      {
        id: 4,
        userId: 2,
        content: 'This is a test review 1 for the fake user 1',
      },
      {
        id: 5,
        userId: 3,
        content: 'This is a test review 1 for the fake user 2',
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2, 3] }
    }, {});
  }
};
