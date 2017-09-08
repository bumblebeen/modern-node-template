
import _ from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import Link from './link';
import { Query as resolvers, typeDef as QueryType } from './query';

const schemas = {
  Link,
};

console.log(QueryType);

const typeDefs = _.reduce(schemas, (currentTypeDef, { typeDef }) => {
  console.log(typeDef);
  currentTypeDef.push(typeDef);
  return currentTypeDef;
}, []);

typeDefs.push(QueryType);

export default makeExecutableSchema({
  typeDefs,
  resolvers,
});
