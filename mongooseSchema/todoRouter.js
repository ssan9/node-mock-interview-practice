const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const { Todo } = require("./models");

router.get('/', (req, res, next) => {
  Todo.find()
    .then(todos => res.json(todos.map(todo => todo.serialize())))
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  Todo.findById(id)
    .then(item => {
      if (item) {
        res.json(item.serialize());
      } else { 
        next();
      }
    }) 
    .catch(next);
});

router.post('/', (req, res, next) => {
  const { title } = req.body;

  /***** Never trust users - validate input *****/
  if (!title) {
    const err = new Error('Missing `title` in request body');
    err.status = 400;
    return next(err);
  }
  
  // Using promises
  router.create({title})
    .then(newItem => {
      res.status(201)
        .location(`${req.originalUrl}/${newItem.id}`)
        .json(newItem.serialize());
  })
    .catch(next);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id;
  /***** Never trust users - validate input *****/
  const updateItem = {};
  const updateableFields = ['title', 'completed'];
  updateableFields.forEach(field => {
    if (field in req.body) {
      updateItem[field] = req.body[field];
    }
  });
  /***** Never trust users - validate input *****/
  if (!updateItem.title) {
    const err = new Error('Missing `title` in request body');
    err.status = 400;
    return next(err);
  }
  // Using promises
  router.findByIdAndUpdate(id, updateItem, { new: true })
    .then(item => {
      if (item) {
        res.json(item.serialize());
      } else {
        next();
      }
    })
    .catch(next);
});

router.delete('/', (req, res, next) => {
  const id = req.params.id;
  // Using promises
  Todo.findByIdAndRemove(id)
    .then(count => {
      if (count) {
        res.status(204).end();
      } else {
        next();
      }
    })
    .catch(next);
});

module.exports = { router };