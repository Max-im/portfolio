module.exports = {
    up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('resumes', [{
        id: 1,
        photo: '',
        name: 'Maksym Pozhydaiev',
        bio: 'I am a developer',
      }]);
    },
    down: (queryInterface, Sequelize) => {
      const Op = Sequelize.Op;

      return queryInterface.bulkDelete('resumes', {[Op.or]: [{id: 1}]});
    }
  };