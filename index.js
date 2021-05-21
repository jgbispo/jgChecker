/*!
 * jg-checker
 * Copyright(c) 2021 João Gustavo Soares Bispo
 * GPL-3.0 License
 */

const checkNumber = require("./lib/checkNumber")
const checkString = require("./lib/checkString")
const checkBoolean = require("./lib/checkBoolean")
const checkObject = require("./lib/checkObject")
const checkFunction = require("./lib/checkFunction")
const checkArray = require("./lib/checkArray")

module.exports = {
    checkNumber,
    checkString,
    checkBoolean,
    checkObject,
    checkFunction,
    checkArray
}