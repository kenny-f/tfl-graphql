var graphql = require('graphql');
var koa = require('koa');
var mount = require('koa-mount');
var graphqlHTTP = require('koa-graphql');
var api = require('./api');
var app = koa();

import {Schema} from './schema';

app.use(mount('/graphql', graphqlHTTP({ schema: Schema, graphiql: true })));

app.on('error', function(err, ctx){
  console.log('server error', err, ctx);
});

const port = 3333;
app.listen(port);
console.log(`listening on port: ${port}`);

