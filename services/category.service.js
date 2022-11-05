const boom = require('@hapi/boom');
const pool = require('../libs/mysql.pool');

class CategoryService {

  constructor() {
    this.pool = pool;
    //this.pool.on('error', (err) => console.error(err));
  }

  async getOne(id) {
    const query = 'SELECT * FROM categories WHERE id = $1';
    const category = await this.pool.query(query, [id]);
    return category.rows;
  }

  async create(data) {
    let { name, items } = data;
    const query = 'INSERT INTO categories (name, items) VALUES ($1, $2)';
    await this.pool.query(query, name, items);
    return data;
  }

  async find() {
    const query = 'SELECT * FROM categorias';
    const categories = await this.pool.query(query, function (err, results, fields) {
      if (err) throw err;
      return results;
    });
    return categories;
  }

  async findOne(id) {
    return { id };
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
