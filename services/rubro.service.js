const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class RubroService {
  constructor() {
  }

  async create(data) {
    const newRubro = await models.Rubro.create(data);
    return newRubro;
  }

  async find() {
    const rta = await models.Rubro.findAll();
    return rta;
  }

  async findOne(id) {
    const rubro = await models.Rubro.findByPk(id);
    if (!rubro) {
      throw boom.notFound('rubro not found');
    }
    return rubro;
  }

  async update(id, changes) {
    const rubro = await this.findOne(id);
    const rta = await rubro.update(changes);
    return rta;
  }

  async delete(id) {
    const rubro = await this.findOne(id);
    await rubro.destroy();
    return { id };
  }
}

module.exports = RubroService;
