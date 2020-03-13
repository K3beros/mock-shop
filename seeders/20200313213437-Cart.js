'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Carts',
    [
      {
        userId: 1,
        productId: 5,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 6,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        productId: 3,
        quantity: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        productId: 2,
        quantity: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        productId: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        productId: 2,
        quantity: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  ),

  down: (queryInterface, Sequelize) =>  queryInterface.bulkDelete('Cart', null, {}
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  )
};
