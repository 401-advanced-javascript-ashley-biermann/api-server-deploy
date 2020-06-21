'use strict';

const express = require('express');
const router = express.Router();

const CategoryModel = require('../models/categories/categories-model');
const ProductModel = require('../models/products/products-model');

function getModel(req, res, next) {
  let model = req.params.model;
  switch (model) {
    case 'categories':
      req.model = new CategoryModel();
      next();
      break;
    case 'products':
      req.model = new ProductModel();
      next();
      break;
    default:
      next('Invalid Model')
      break;
  }
}

router.param('model', getModel);

router.get('/:model', getAll);
router.get('/:model/:id', getOneById);
router.post('/:model', createOne);
router.put('/:model/:id', updateOneById);
router.delete('/:model/:id', deleteOneById);

async function getAll(req, res) {
  console.log('getAll route hit');
  const result = await req.model.get();
  res.send(result);
}

async function getOneById(req, res) {
  const result = await req.model.get(req.params.id);
  res.send(result);
}

async function createOne(req, res) {
  const result = await req.model.create(req.body);
  res.send(result);
}

async function updateOneById(req, res) {
  const result = await req.model.update(req.params.id, req.body);
  res.send(result);
}

async function deleteOneById(req, res) {
  const result = await req.model.delete(req.params.id);
  res.send(result);
}

module.exports = router;
