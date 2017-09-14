import { User } from './../../../database/models';

class UserType {
  constructor(email) {
    this.email = email;
  }
}

UserType.allUsers = (args) => {
  const query = (args) ? { where: args } : undefined;
  return User.findAll(query);
};

UserType.createUser = ({ email }) => {
  console.log('Creating user for: ', email);
  return User.create({ email });
};

UserType.typeDef = `
  type User {
    id: ID!
    email: String!
  }
`;

export default UserType;
