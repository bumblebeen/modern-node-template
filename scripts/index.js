
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';

import Greeter from './controllers/greeter';
import schema from './schemas';

const helloWorld = new Greeter('Hello World');
helloWorld.fortuneGreeting();

const app = require('./server');

app.use('/graphql', graphqlExpress({ schema }));
app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

app.listen(8080, () => {
  console.log('Server at 8080');
});

export default Greeter;
