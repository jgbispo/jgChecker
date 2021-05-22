/*
* File responsible for starting all exports all verified typos of elements 
*/

const Number = require("./src/number")
const String = require("./src/string")
const Boolean = require("./src/boolean")
const Object = require("./src/object")
const Function = require("./src/function")
const Array = require("./src/array")

module.exports = {
    Number,
    String,
    Boolean,
    Object,
    Function,
    Array
}