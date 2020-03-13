'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Users',
    [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'Johndoe@mail.com',
        password: 'Stfu',
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'June',
        lastName: 'Wozniac',
        email: 'Jwozniac@mail.com',
        password: 'nmqsbwhb',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Peter',
        lastName: 'Rabbit',
        email: 'peterrabbit@mail.com',
        password: 'nbdsjns',
        isAdmin: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Tom',
        lastName: 'Hanks',
        email: 'thanks@mail.com',
        password: 'jkndhj',
        isAdmin: true,
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

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('User', null, {}
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  )
};