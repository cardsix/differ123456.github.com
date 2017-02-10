const koa = require('koa');
var app = koa();

var koaRoute = require('koa-route');

var coViews = require('co-views');
var rander = coViews('./view',{
	map : { html : 'ejs'}
});

var service = require('./service/webAppService.js');


app.use(koaRoute.get('/test',function *(){
	this.body = service.test();
}));

app.use(koaRoute.get('/',function *(){
	this.body = yield rander('index',{title:'this is index'});
}));

app.listen(3001);