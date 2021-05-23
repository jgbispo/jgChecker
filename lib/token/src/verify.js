const jws = require("jws");

const { string } = require("../../typeof/index");
const decode = require("./decode");

const verify = (token, secret) => {

	string(token);
	string(secret);

	var exp = decode(token).payload.exp;

	var expired = exp >= Math.floor(Date.now() / 1000);

	if (!expired) {
		throw new Error("Token expired");
	}

	return jws.verify(token, "HS256", secret);
};

module.exports = verify;