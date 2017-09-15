import { Todo } from './../../../database/models';

const resolver = {
  user: (root) => root.getUser(),
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
