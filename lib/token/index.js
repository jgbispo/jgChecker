// File responsible for exporting all data that involves the token

const sign = require("./src/sign");
const verify = require("./src/verify");
const decode = require("./src/decode");

module.exports = { 
	sign,
	verify,
	decode
};