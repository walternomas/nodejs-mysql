const { Model, DataTypes, Sequelize } = require('sequelize');

const RUBRO_TABLE = 'rubros';

const RubroSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  rubro: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: Sequelize.NOW
  }
}

class Rubro extends Model {
  static associate() {
    //
  }
  static config(sequelize) {
    return {
      sequelize,
      tableName: RUBRO_TABLE,
      modelName: 'Rubro',
      timestamps: false
    }
  }
}

module.exports = {
  RUBRO_TABLE,
  RubroSchema,
  Rubro
}
