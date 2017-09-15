import { User, Todo } from './../../../database/models';

const resolver = {
  todos: ({ id: UserId }) => {
    const query = {
      where: {
        UserId,
      },
    };
    return Todo.findAll(query);
  },
};

const allUsers = (_, args) => {
  const query = (args) ? { where: args } : undefined;
  return User.findAll(query);
};

const createUser = ({ email }) => User.create({ email });

const typeDef = `
  type User {
    id: ID!
    email: String!
    todos: [Todo]
  }
`;

export default {
  resolver,
  allUsers,
  typeDef,
  createUser,
};
