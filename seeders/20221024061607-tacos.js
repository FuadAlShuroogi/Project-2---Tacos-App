'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

  //    await queryInterface.bulkInsert('menus', [{
  //    name: 'Shrimp Tacos',
  //    image: 'taco2.png',
  //    price: 3,
  //    createdAt: new Date().toISOString(),
  //    updatedAt:new Date().toISOString()
  //    },

  //    {
  //     name: 'Chicken Taco Salad',
  //     image: 'taco4.png',
  //     price: 2,
  //     createdAt: new Date().toISOString(),
  //     updatedAt:new Date().toISOString()
  //     },

  //     {
  //       name: 'Guacamole Chicken Tacos',
  //       image: 'taco5.png',
  //       price: 4,
  //       createdAt: new Date().toISOString(),
  //       updatedAt:new Date().toISOString()
  //       },

  //       {
  //         name: 'Chicken Tacos',
  //         image: 'taco4.png',
  //         price: 2,
  //         createdAt: new Date().toISOString(),
  //         updatedAt:new Date().toISOString()
  //         },

  //         {
  //           name: 'Brisket Tacos',
  //           image: 'taco2.png',
  //           price: 3,
  //           createdAt: new Date().toISOString(),
  //           updatedAt:new Date().toISOString()
  //           },

  //           {
  //             name: 'Solo Taco Combo',
  //             image: 'taco4.png',
  //             price: 5,
  //             createdAt: new Date().toISOString(),
  //             updatedAt:new Date().toISOString()
  //             },

  //             {
  //               name: 'Solo Taco Combo',
  //               image: 'taco4.png',
  //               price: 5,
  //               createdAt: new Date().toISOString(),
  //               updatedAt:new Date().toISOString()
  //               },

  //               {
  //                 name: 'Solo Taco Combo',
  //                 image: 'taco4.png',
  //                 price: 5,
  //                 createdAt: new Date().toISOString(),
  //                 updatedAt:new Date().toISOString()
  //                 },
  
  //   ], {});
  // },

  await queryInterface.bulkInsert('orders', [{
    customerId: 1,
    items: '{"phone": "35567777","address": "Riffa","paymentType": "COD"}',
    createdAt: new Date().toISOString(),
    updatedAt:new Date().toISOString()
    },

    // {
    //   customerId: 2,
    //   items: {id: 14,
    //     name: 'TEST',
    //     image: 'TEST.png',
    //     price: 2},
    //     phone: '12345678',
    //     address: 'Riffa',
    //     paymentType: 'VISA',
    //   createdAt: new Date().toISOString(),
    //   updatedAt:new Date().toISOString()
    //  },
 
   ], {});
 },

  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('menus', null, {});
  }
};
