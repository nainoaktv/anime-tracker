'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      await queryInterface.addColumn('animes', 'userId', {
        type: Sequelize.INTEGER,
        allowNull: false
      }),
      await queryInterface.addColumn('animes', 'isWatching', {
        type: Sequelize.BOOLEAN,
        allowNull: false
      })
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.removeColumn('animes', 'userId'),
      queryInterface.removeColumn('animes', 'isWatching'),
    ]);
  }
};
