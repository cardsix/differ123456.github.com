const fs = require('fs');

exports.test = function(){
	return fs.readFileSync('./mock/test.json','utf8');
};