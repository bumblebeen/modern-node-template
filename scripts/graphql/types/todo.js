import { User, Todo } from './../../../database/models';

const resolver = {
  user: ({ UserId }) => {
    console.log();
    return User.findById(UserId);
  },
};

const createTodo = ({ UserId, title }) => Todo.create({ UserId, title });

const typeDef = `
  type Todo {
    id: ID!
    title: String
    complete: Boolean
    user: User
  }
`;

export default {
  createTodo,
  typeDef,
  resolver,
};
