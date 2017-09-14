import { Link, UserType, TodoType } from './types';

const resolvers = {
  Query: {
    allLinks: (...args) => Link.allLinks(...args),
    allUsers: (_, args) => UserType.allUsers(args),
  },
  Mutation: {
    createUser: (root, args) => {
      console.log(root);
      console.log(args);
      return UserType.createUser(args);
    },
    createTodo: (root, args) => TodoType.createTodo(args),
  },
};

export default resolvers;
