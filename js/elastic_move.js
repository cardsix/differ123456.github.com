/*
* @Author: Administrator
* @Date:   2016-07-15 20:16:32
* @Last Modified by:   Administrator
* @Last Modified time: 2016-08-11 21:39:19
*/

'use strict';
function elastic(obj,iTarget){
	var iSpeed = 0;
	clearInterval(iTarget);
	
	obj.timer = setInterval(function(){
		// console.log(obj.timer);
		iSpeed += (iTarget-obj.offsetLeft)/5;
		iSpeed *= 0.75;
		obj.style.left = obj.offsetLeft + iSpeed + 'px';
		if(Math.round(Math.abs(iSpeed))==0){
			clearInterval(obj.timer); 
		}
		console.log(iSpeed);
	},30);
}