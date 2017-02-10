const fs = require('fs');

exports.test = function(){
	return fs.readFileSync('./mock/test.json','utf8');
};

exports.returnIndex = function(){
	return fs.readFileSync('./mock/home.json','utf8');
};