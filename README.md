# jgChecker
 The jg-checker has the function of verifying what the type of variable will be, what is really expected to avoid that something not wanted is accepted and of a catastrophic error in the system.


## What is verified?

You can use jg-checker to check data entry depending on your project, you can check data like

- Number
- String
- Boolean
- Function
- Object
- Array

## Quick Start

```shell
$ npm i jg-checker
```

```js
const jgChecker = require("jg-checker");
```

### Using jgChecker

```js
const jgChecker = require("jg-checker");

jgchecker.checkNumber(<data-that-will-be-verified>, <error-message-you-want>)

```

```js
const jgChecker = require("jg-checker");

// Return in this case is nothing, meaning it passed the test
jgchecker.checkNumber(12, "It's not a number")

// Return in this case is the message that was chosen, in no case, then the default is used
jgchecker.checkNumber("Not a number")

```