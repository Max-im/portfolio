module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('experiences', [
        {
          id: 1,
          organisation: 'PrivatBank', 
          from: new Date('2001-01-01'),
          to: new Date('2001-02-01'),
          description: 'pb description',
          icon: ''
        },
        {
          id: 2,
          organisation: 'Regional Gaz Company', 
          from: new Date('2001-01-01'),
          to: new Date('2001-02-01'),
          description: 'gaz description',
          icon: ''
        },
        {
          id: 3,
          organisation: 'Chernobil Nuclear Station', 
          from: new Date('2001-01-01'),
          to: new Date('2001-02-01'),
          description: 'chnpp description',
          icon: ''
        },
        {
          id: 4,
          organisation: 'IDeals', 
          from: new Date('2001-01-01'),
          to: new Date('2001-02-01'),
          description: 'ideals description',
          icon: ''
        },
        {
          id: 5,
          organisation: 'Astound Commerce', 
          from: new Date('2001-01-01'),
          to: new Date('2001-02-01'),
          description: 'astound description',
          icon: ''
        }
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('experiences', {});
    }
  };