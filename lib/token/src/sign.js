const { string, object, number } = require("../../typeof/index");
const jws = require("jws");

const sign = (payload, secret, time) => {

	try {
		string(payload);
	} catch (err) {
		object(payload);
	}

	try {
		number(time);
	} catch (error) {
		time = 86400; // 24h
	}

	payload.exp = Math.floor(Date.now() / 1000) + time;

	string(secret);

	return jws.sign({
		header: { alg: "HS256" },
		payload: payload,
		secret: secret,
	});
};

console.log(sign({ id: "ok" }, "x", 15));

module.exports = sign;