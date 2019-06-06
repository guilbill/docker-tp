/**
 * Created by gbilley on 26/05/17.
 */
const http = require('http');
const port = 3001;

const redis = require("async-redis");
const redisClient = redis.createClient('durnal');
var redisOk = true;
redisClient.on("error", function (err) {
  redisOk = false;
})

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  var hello = 'Hello World \n';
  var visits = 'No Redis';

  if (redisOk) {
    visits = await redisClient.incr("counter");
  }
  res.end(hello + visits);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}/`);
});
