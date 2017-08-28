import { SubTask } from './../../database/models';

module.exports = {
  create(req, res) {
    return SubTask.create({
      content: req.body.content,
      taskId: req.params.taskId,
    }).then(task => res.status(201).send(task))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return SubTask.all()
      .then(task => res.status(201).send(task))
      .catch(error => res.status(400).send(error));
  },
};
