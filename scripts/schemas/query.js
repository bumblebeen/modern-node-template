import _ from 'lodash';
import Link from './link';

const links = [
  {
    id: 1,
    url: 'http://graphql.org/',
    description: 'The Best Query Language',
  },
  {
    id: 2,
    url: 'http://dev.apollodata.com',
    description: 'Awesome GraphQL Client',
  },
];

export const Query = {
  Query: {
    allLinks: () => {
      return _.map(links, (link) => new Link(link.id, link.url, link.description));;
    },
  },
};

export const typeDef = `
  type Query {
    allLinks: [Link!]!
  }
`;

