import { User, Todo } from './../../database/models';

module.exports = {
  list(req, res) {
    return User.findAll({
      include: [Todo],
    }).then((users) => {
      console.log(users);
      res.json(users);
    });
  },
};
