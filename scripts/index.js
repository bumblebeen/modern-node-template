
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import Greeter from './controllers/greeter';
import schema from './graphql';

const helloWorld = new Greeter('Hello World');
helloWorld.fortuneGreeting();

const app = require('./server');

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(8081, () => {
  console.log('Server at 8080');
});

export default Greeter;
