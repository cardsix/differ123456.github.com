const koa = require('koa');
var router = require('koa-route');
var service = require('./service/webAppService.js');

var app = koa();

app.use(router.get('/test',function *(){
	this.body = service.test();
}));

app.use(function *(){
  this.body = 'Hello Koa';
});

app.listen(3001);