#This is ahead of the NPM Version found [here](https://npmjs.com/package/bot-utils). The NPM version will be updated after commits have been approved here

Utilities usable in any Discord Bot

Docs:

.randColor() : Gives you a random color code

.randInt(min, max) : Gives you a random number between `min` and `max`

.uptime() : Returns uptime

.capital(string) : Capitalizes the first letter of the string

.randAlphaNum(len) : Random Alpha numeric

.round(number, decimal place) : Rounds the inputted number to the given decimal place

.isNumber(input) : Checks if the input is a number

.removeHtml(string) : Removes the html from the string

How to use:

```
var util = require('bot-utils')

console.log(util.randColor())
//14013163
console.log(util.randInt(1,5))
//4
console.log(util.uptime())
//1 day, 12 minutes and 10 seconds
console.log(util.capital('hello world'))
//Hello world
console.log(util.randAlphaNum(1))
//5
console.log(util.round(2.482482, 4))
//2.4824
console.log(util.isNumber(3))
//true
console.log(removeHtml('<h1>hello world<h1>'))
//hello world
```

More coming in future
