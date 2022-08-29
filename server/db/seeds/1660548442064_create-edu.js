module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('educations', [
        {
          id: 1,
          organisation: 'DonNU',
          from: new Date('2003-09-01'),
          to: new Date('2008-06-01'),
          description: 'Economic',
          icon: ''
        }
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('educations', {});
    }
  };