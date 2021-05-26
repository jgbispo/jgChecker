const { string, object, number } = require("../../typeof/index");
const jws = require("jws");

const sign = (payload, secret, time) => {

	// Using the typeof module to check if the parameters are as expected, in this case, strings
	// As two types of data can be passed, verification is done on both types
	try {
		string(payload);
	} catch (err) {
		object(payload);
	}
	string(secret);

	// As the token expiration time is optional, it is checked if it has been passed, if not, the default 24h time is set
	try {
		number(time);
	} catch (error) {
		time = 86400; // 24h
	}

	// the expiration time is added to the token
	payload.exp = Math.floor(Date.now() / 1000) + time;


	// The token is created, passing it hide, payload and the secret word. Enconden is not yet possible to modify, but in the future it will be
	return jws.sign({
		header: { alg: "HS256" },
		payload: payload,
		secret: secret,
	});
};

module.exports = sign;