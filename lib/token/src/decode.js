const jws = require("jws");
const { string } = require("../../typeof/index");

const decode = (token) => {

	// Using the typeof module to check if the parameters are as expected, in this case, strings
	string(token);

	// the token is decoded to an object
	var decode = jws.decode(token);

	// The payload converted to json so we can get the data in it
	var payload = JSON.parse(decode.payload);
	
	// A json object is returned, so it can be more easily manipulated
	return {
		headers: decode.header,
		payload: payload,
		token: decode.signature
	};
};

module.exports = decode;