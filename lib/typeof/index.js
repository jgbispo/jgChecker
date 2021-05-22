/*
* File responsible for starting all exports all verified typos of elements 
*/

const number = require("./src/number");
const string = require("./src/string");
const boolean = require("./src/boolean");
const object = require("./src/object");
const fun = require("./src/function");
const array = require("./src/array");

module.exports = {
	number,
	string,
	boolean,
	object,
	fun,
	array
};