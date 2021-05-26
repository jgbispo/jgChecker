const jws = require("jws"); 

const { string } = require("../../typeof/index");
const decode = require("./decode");

const verify = (token, secret) => {

	// Using the typeof module to check if the parameters are as expected, in this case, strings
	string(token);
	string(secret);

	// Extracted the expiration time from the token, to be able to check if the specified time has passed
	var exp = decode(token).payload.exp;

	// Calculation and verification of the token expiration time
	var expired = exp >= Math.floor(Date.now() / 1000);
	if (!expired) {
		throw new Error("Token expired");
	}

	// Checking the token integrity - returns true if successfully verified
	return jws.verify(token, "HS256", secret);
};

module.exports = verify;