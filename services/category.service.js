const { models } = require('../libs/sequelize');

class CategoryService {

  constructor() {
  }

  async getOne(id) {
    const query = 'SELECT * FROM categories WHERE id = $1';
    const category = await this.pool.query(query, [id]);
    return category.rows;
  }

  async create(data) {
    const newCategory = await models.Category.create(data);
    return newCategory;
  }

  async find() {
    const categories = await models.Category.findAll();
    return categories;
  }

  async findOne(id) {
    const category = await models.Category.findByPk(id, {
      includes: ['products']
    });
    return category;
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    const query = 'DELETE FROM categories WHERE id = $1';
    await this.pool.query(query, [id]);
    return { id };
  }

}

module.exports = CategoryService;
