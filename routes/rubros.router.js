const express = require('express');
const RubroService = require('./../services/rubro.service');
const validatorHandler = require('./../middlewares/validator.handler');
const {
  updateRubroSchema,
  createRubroSchema,
  getRubroSchema
} = require('./../schemas/rubro.schema');

const router = express.Router();
const service = new RubroService();

router.get('/', async (req, res, next) => {
  try {
    const rubros = await service.find();
    res.json(rubros);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  validatorHandler(getRubroSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rubro = await service.findOne(id);
      res.json(rubro);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createRubroSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newRubro = await service.create(body);
      res.status(201).json(newRubro);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  validatorHandler(getRubroSchema, 'params'),
  validatorHandler(updateRubroSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const rubro = await service.update(id, body);
      res.json(rubro);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id',
  validatorHandler(getRubroSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({ id });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;

