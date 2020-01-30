'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {    

      
      return queryInterface.bulkInsert('products', [
        {
          name: 'Café Americano',
          price: 7,
          breakfast: true,
          category: 'Café da Manhã',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Café com Leite',
          price: 7,
          breakfast: true,
          category: 'Café da Manhã',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Suco de Fruta Natural',
          price: 7,
          breakfast: true,
          category: 'Café da Manhã',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Água 500ml',
          price: 5,
          breakfast: false,
          category: 'Bebidas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Batata Frita',
          price: 5,
          breakfast: false,
          category: 'Acompanhamento',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Misto Quente',
          price: 10,
          breakfast: true,
          category: 'Café da Manhã',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Refrigerante 500ml',
          price: 7,
          breakfast: false,
          category: 'Bebidas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Refrigerante 750ml',
          price: 10,
          breakfast: false,
          category: 'Bebidas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Água 750ml',
          price: 7,
          breakfast: false,
          category: 'Bebidas',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Anéis de Cebola',
          price: 5,
          breakfast: false,
          category: 'Acompanhamento',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Hambúrguer Simples',
          price: 10,
          breakfast: false,
          category: 'Hambúrgueres',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

        {
          name: 'Hambúrguer Duplo',
          price: 15,
          breakfast: false,
          category: 'Hambúrgueres',
          createdAt: new Date(),
          updatedAt: new Date(),
        },

    ], {});
   
  },

  down: (queryInterface, Sequelize) => {   

      return queryInterface.bulkDelete('products', null, {});
          
  }
};
