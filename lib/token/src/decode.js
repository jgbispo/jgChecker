const jws = require("jws");
const { string } = require("../../typeof/index");

const decode = (token) => {

	string(token);

	var decode = jws.decode(token);

	var payload = JSON.parse(decode.payload);
	
	return {
		headers: decode.header,
		payload: payload,
		token: decode.signature
	};
};

module.exports = decode;