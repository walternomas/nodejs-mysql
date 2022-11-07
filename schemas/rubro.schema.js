const Joi = require('joi');

const id = Joi.number().integer();
const rubro = Joi.string();

const createRubroSchema = Joi.object({
  rubro: rubro.required()
});

const updateRubroSchema = Joi.object({
  rubro: rubro
});

const getRubroSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createRubroSchema,
  updateRubroSchema,
  getRubroSchema
}
