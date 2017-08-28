import { Task } from './../../database/models';

module.exports = {
  create(req, res) {
    return Task.create({
      title: req.body.title,
    }).then(task => res.status(201).send(task))
      .catch(error => res.status(400).send(error));
  },
};
