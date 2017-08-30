import { Todo } from './../../database/models';

module.exports = {
  list(req, res) {
    return Todo.all()
      .then(todo => {
        console.log(JSON.stringify(todo));
        res.status(201).send(todo);
      })
      .catch(error => res.status(400).send(error));
  },
};
