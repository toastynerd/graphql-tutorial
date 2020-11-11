const server = require('./server');

server.start({ port: process.env.PORT || 4000 }, (info) => console.log(`server up and running on port: ${info.port}`));
