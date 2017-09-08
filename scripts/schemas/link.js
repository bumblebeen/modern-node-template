
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

Link.typeDef = `
  type Link {
    id: ID!
    url: String!
    description: String!
    ola: String!
  }
`;

export default Link;
