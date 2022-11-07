'use strict';

const { RubroSchema, RUBRO_TABLE } = require('../models/rubro.model');

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.createTable(RUBRO_TABLE, RubroSchema);
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(RUBRO_TABLE);
  }
};
