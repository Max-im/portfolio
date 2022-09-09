module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('experiences', [
        {
          id: 1,
          organisation: 'PrivatBank', 
          from: new Date('2009-06-20'),
          to: new Date('2010-04-24'),
          description: 'pb description',
          position: 'Credit Specialist',
          icon: ''
        },
        {
          id: 2,
          organisation: 'Regional Gaz Company', 
          from: new Date('2010-04-25'),
          to: new Date('2014-09-07'),
          description: 'gaz description',
          position: 'from Economist to Head of Department',
          icon: ''
        },
        {
          id: 3,
          organisation: 'Chernobil Nuclear Station', 
          from: new Date('2014-09-07'),
          to: new Date('2018-01-08'),
          description: 'chnpp description',
          position: 'Economist',
          icon: ''
        },
        {
          id: 4,
          organisation: 'IDeals', 
          from: new Date('2018-01-09'),
          to: new Date('2020-09-08'),
          description: 'ideals description',
          position: 'JavaScript Developer',
          icon: ''
        },
        {
          id: 5,
          organisation: 'Astound Commerce', 
          from: new Date('2019-09-09'),
          to: null,
          description: 'astound description',
          position: 'Web Developer',
          icon: ''
        }
      ]);
    },
    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('experiences', {});
    }
  };