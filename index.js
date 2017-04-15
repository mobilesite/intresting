'use strict';

const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');

mongoose.connect(process.env.PROD_MONGODB)

app.use(ctx => {
    ctx.body = 'hello, wolrd'
});

app.listen(process.env.PORT || 5000);

console.log('server started. you can visit it at http://localhost');