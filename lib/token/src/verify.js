const jws = require("jws");
const { string } = require("../../typeof/index");

const verify = (token, secret) => {

	string(token);
	string(secret);

	return jws.verify(token, "HS256", secret);
};

module.exports = verify;