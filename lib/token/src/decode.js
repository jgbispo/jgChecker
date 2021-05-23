const jws = require("jws");
const { string } = require("../../typeof/index");

const decode = (token) => {

	string(token);

	var decode = jws.decode(token);

	var payload = typeof (decode.payload) == "object" ? JSON.parse(decode.payload) : decode.payload;

	return {
		headers: decode.header,
		payload: payload,
		token: decode.signature
	};
};

module.exports = decode;