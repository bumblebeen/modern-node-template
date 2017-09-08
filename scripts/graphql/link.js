import _ from 'lodash';

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

class Link {
  constructor(id, url, description) {
    this.id = id;
    this.url = url;
    this.description = description;
  }
  ola() {
    return 'olaaa';
  }
}

Link.allLinks = () => _.map(links, (link) => new Link(link.id, link.url, link.description));

Link.typeDef = `
  type Link {
    id: ID!
    url: String!
    description: String!
    ola: String!
  }
`;

export default Link;
