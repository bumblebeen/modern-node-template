
const typeDef = `
  type Query {
    allLinks: [Link!]!
    allUsers: [User]!
  }
  type Mutation {
    createUser(email: String!): User
    createTodo(UserId: ID!, title: String!): Todo
  }
`;

export default typeDef;

