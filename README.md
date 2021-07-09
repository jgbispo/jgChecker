# jgChecker
jg-checker is able to check data types and generate valid tokens

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
$ npm i jgchecker
```

```js
const jgChecker = require("jgchecker");
```

## Available functions 

### Checking the types of variables

```js
checkTypeOf.string(<string>);
// Responsible for checking if the type is a String
```

```js
checkTypeOf.number(<number>);
// Responsible for checking if the type is a Number
```

```js
checkTypeOf.object(<object>);
// Responsible for checking if the type is an Object
```

```js
checkTypeOf.fun(<fun>);
// Responsible for checking if the type is a Function
```

```js
checkTypeOf.boolean(<boolean>);
// Responsible for checking if the type is a Boolean
```

```js
checkTypeOf.array(<array>);
// Responsible for checking if the type is an Array
```

### Token generation

```js
const token = token.sing({payload}, secret, time);

// payload - A valid json
// secret - A string so that your token is unique
// time (optional) - Time for the token to inspire

------------------------------------------------------

// console.log(token) == token -> string
```

```js
token.verify(token)

/* 
You will be responsible for verifying the token, from its integrity until the expiration time 
*/

// If invalid, it will return an error
```

```js
token.decode(token, secret)

/* decodes the token, allowing data to be taken, such as the payload used to generate */
```

## Author

- [Instagram]("https://www.instagram.com/3isp0/")
- [Git Hub]("https://github.com/jgbispo")

## License

[LICENSE](LICENSE)
