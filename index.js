var exports = module.exports = {};
var os = require('os')

exports.randInt = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randColor = function(){
	return Math.floor(Math.random()*0x1000000)
}
exports.osUptime = function(){
	 var msec = os.uptime().toFixed(0) * 1000;
  var days = Math.floor(msec / 1000 / 60 / 60 / 24);
  msec -= days * 1000 * 60 * 60 * 24;
  var hours = Math.floor(msec / 1000 / 60 / 60);
  msec -= hours * 1000 * 60 * 60;
  var mins = Math.floor(msec / 1000 / 60);
  msec -= mins * 1000 * 60;
  var secs = Math.floor(msec / 1000);
  var timestr = "";
  if(days > 0) {
      timestr += days + " days ";
  }
  if(hours > 0) {
      timestr += hours + " hours ";
  }
  if(mins > 0) {
      timestr += mins + " minutes ";
  }
  if(secs > 0) {
      timestr += secs + " seconds";
  }
  return timestr
}
exports.uptime = function(){
var msec = process.uptime().toFixed(0) * 1000;
var days = Math.floor(msec / 1000 / 60 / 60 / 24);
msec -= days * 1000 * 60 * 60 * 24;
var hours = Math.floor(msec / 1000 / 60 /60);
msec -= hours * 1000 * 60 * 60;
var mins = Math.floor(msec / 1000 / 60);
msec -= mins * 1000 * 60;
var secs = Math.floor(msec / 1000);
var timestr = "";
if (days > 0) {
timestr += days + " days ";
}
if (hours > 0) {
timestr += hours + " hours ";
}
if (mins > 0) {
timestr += mins + " minutes ";
}
if (secs > 0) {
timestr += secs + " seconds";
}
return timestr 
}
exports.randAlphaNum = function(len) {
    var rdmString = "";
    for( ; rdmString.length < len; rdmString  += Math.random().toString(36).substr(2));
    return  rdmString.substr(0, len);
}
exports.round = function(number, decimalPlace){
	return number.toFixed(decimalPlace)
}
exports.isNumber = function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
}
exports.removeHtml = function(text) {  
    var replacements= {"<": "&lt;", ">": "&gt;","&": "&amp;", '"': "&quot;"};                      
    return text.replace(/[<>&"]/g, function(character) {  
        return replacements[character];  
    }); 
}
exports.randItemFromArry = function(array){
	return array[Math.floor(Math.random() * array.length)];
}
exports.arrayTo(max){
	var numbersArray = []
	return for( var i=1; numbersArray.push(i++) < max;);  // numbers = [1,2,3 ... 100] 
}
exports.isArray = function(obj){
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}