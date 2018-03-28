var exports = module.exports = {};


exports.randInt = function(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
exports.randColor = function(){
	return Math.floor(Math.random()*0x1000000)
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