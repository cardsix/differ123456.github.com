const koa = require('koa');
var app = koa();

var koa_route = require('koa-route');

var views = require('co-views');
var rander = views('./view',{
	map : { html : 'ejs'}
});

var koa_static = require('koa-static-server');
app.use(koa_static({
	rootDir:'./static',
	rootPath:'/static/',
	maxage:0
}));

var service = require('./service/webAppService.js');

app.use(koa_route.get('/test',function *(){
	this.body = service.test();
}));

//view router settings
app.use(koa_route.get('/',function *(){
	this.body = yield rander('index',{
		title:'书城主页',
		testData:service.returnIndex()
	});
}));
app.use(koa_route.get('/book',function *(){
	this.body = yield rander('book',{title:'书籍详情页'});
}));
app.use(koa_route.get('/search',function *(){
	this.body = yield rander('search',{title:'搜索页'});
}));

app.listen(3001);