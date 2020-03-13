'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'Products',
    [
      {
        name: 'Nike jordans',
        description: 'Nike jordans with siver linnings',
        category: 'shoes',
        price: 50.5,
        imageUrl: 'image.png',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Puma 360',
        description: 'Puma 360 rangers',
        category: 'shoes',
        price: 75,
        imageUrl: 'image.png',
        inStock: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Fila frost',
        description: 'Fila frost definitions',
        category: 'shoes',
        price: 65,
        imageUrl: 'image.png',
        inStock: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        name: 'Lacoste slides',
        description: 'Lacoste fli flops',
        category: 'slides',
        price: 15,
        imageUrl: 'image.png',
        inStock: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nike AIR',
        description: 'Nike Air coastal linnings',
        category: 'shoes',
        price: 90,
        imageUrl: 'image.png',
        inStock: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Nike jordans',
        description: 'Nike jordan joggers',
        category: 'clothes',
        price: 25,
        imageUrl: 'image.png',
        inStock: false,
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

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Product', null, {}
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  )
};