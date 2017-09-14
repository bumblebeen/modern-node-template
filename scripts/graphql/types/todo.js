import { Todo } from './../../../database/models';

class TodoType {
  constructor(userId, title, complete) {
    this.userId = userId;
    this.title = title;
    this.complete = complete;
  }
}

TodoType.createTodo = ({ UserId, title }) => {
  console.log('Creating todo for: ', UserId);
  return Todo.create({ UserId, title });
};

TodoType.typeDef = `
  type Todo {
    id: ID!
    title: String
    complete: Boolean
  }
`;

export default TodoType;
