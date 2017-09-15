import { Link, UserType, TodoType } from './types';

const resolvers = {
  Query: {
    allLinks: (...args) => Link.allLinks(...args),
    allUsers: UserType.allUsers,
  },
  Mutation: {
    createUser: (root, args) => UserType.createUser(args),
    createTodo: (root, args) => TodoType.createTodo(args),
  },
  User: UserType.resolver,
  Todo: TodoType.resolver,
};

export default resolvers;
