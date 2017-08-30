import { user, tasks, subtasks, todo } from './controllers';

const express = require('express');
const bodyParser = require('body-parser');
const models = require('../database/models');
// Set up the express app
const app = express();

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.get('/todo/:id', async (req, res) => {
  const item = await models.Todo.find({ where: { id: req.params.id } });
  res.json(item);
});

app.get('/sss', todo.list);

app.get('/todos', async (req, res) => {
  const todos = await models.Todo.findAll({});
  res.json(todos);
});

app.get('/todoss', async (req, res) => {
  const todos = await models.Todo.findAndCountAll({});
  res.json(todos);
});

app.post('/todo', async (req, res) => {
  const item = await models.Todo.create({
    title: req.body.title,
    UserId: req.body.user_id,
  });
  res.json(item);
});

app.get('/wew', user.list);

app.put('/todo/:id', (req, res) => {
  models.Todo.find({ where: { id: req.params.id } }).then((todo) => {
    if (todo) {
      todo.updateAttributes({
        title: req.body.title,
        complete: req.body.complete,
      }).then((updatedTodo) => {
        res.send(updatedTodo);
      });
    }
  });
});

app.delete('/todo/:id', async (req, res) => {
  const item = await models.Todo.destroy({ where: { id: req.params.id } });
  res.json(item);
});

app.get('/api/tasks', tasks.list);
app.get('/api/taskc', tasks.count);
app.post('/api/task', tasks.create);
app.get('/api/tasks/:taskId', tasks.retrieve);
app.post('/api/tasks/:taskId/subtask', subtasks.create);


module.exports = app;
