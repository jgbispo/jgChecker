const { string, object } = require("../../typeof/index");
const jws = require("jws");

const sign = (payload, secret) => {

	try {
		string(payload);
	} catch (err) {
		object(payload);
	}
    
	string(secret);

	return jws.sign({
		header: { alg: "HS256" },
		payload: payload,
		secret: secret,
	});
};

console.log(sign("payload", "secrete"));

module.exports = sign;