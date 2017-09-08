import Link from './link';

const resolvers = {
  Query: {
    allLinks: (...args) => Link.allLinks(...args),
  },
};

export default resolvers;
