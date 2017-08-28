import { Task, SubTask } from './../../database/models';

module.exports = {
  create(req, res) {
    return Task.create({
      title: req.body.title,
    }).then(task => res.status(201).send(task))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Task.findAll({
      include: [{
        model: SubTask,
        as: 'subTasks',
      }],
    }).then(task => res.status(201).send(task))
      .catch(error => {
        console.log(error);
        res.status(400).send(error);
      });
  },
  retrieve(req, res) {
    return Task.findById(req.params.taskId, {
      include: [{
        model: SubTask,
        as: 'subTasks',
      }],
    }).then((task) => {
      if (!task) {
        return res.status(404).send({
          message: 'Task Not Found',
        });
      }
      return res.status(200).send(task);
    }).catch(error => {
      console.log(error);
      res.status(400).send(error);
    });
  },
};
