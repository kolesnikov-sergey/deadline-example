import { GreeterPromiseClient } from '../helloworld_grpc_web_pb';
import { HelloRequest } from '../helloworld_pb';

const client = new GreeterPromiseClient('https://google.com'); // fake hostname

const req = new HelloRequest();

// promise does not finished, request is not sent (can be seen through chrome chrome dev tools)
client.sayHello(req, { deadline: Date.now() + 2000 }).finally(() => console.log('finished'));

// works correctly without a deadline
// client.sayHello(req).finally(() => console.log('finished'));