
import _ from 'lodash';
import { makeExecutableSchema } from 'graphql-tools';

import Link from './link';

import QueryType from './query';
import resolvers from './rootResolver';

const schemas = {
  Link,
};

const typeDefs = _.reduce(schemas, (currentTypeDef, { typeDef }) => {
  currentTypeDef.push(typeDef);
  return currentTypeDef;
}, []);

typeDefs.push(QueryType);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
