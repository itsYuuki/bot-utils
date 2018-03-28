#
Utilities usable in any Discord Bot

Docs:

.randColor() : Gives you a random color code

.randInt(min, max) : Gives you a random number between `min` and `max`

.uptime() : Returns uptime

.capital(string) : Capitalizes the first letter of the string

.randAlphaNum(len) : Random Alpha numeric

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
```
More coming in future
