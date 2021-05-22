/* eslint-disable no-undef */
const { token } = require("../index");

describe("Testing all functions Token", () => {
	var tk;

	/////////////////
	/// Token Sign
	/////////////////

	it("Token Sign - without error", function () {
		tk = token.sign("payload", "secret");

		expect(tk != undefined);
	});

	it("Token Sign - with error", function () {
		try {
			token.sign(15);
		} catch (error) {
			expect(error.message).toBe("The data provided is not a String");
		}
	});

	it("Token Sign - with error", function () {
		try {
			token.sign(undefined);
		} catch (error) {
			expect(error.message).toBe("No data was entered");
		}
	});

	/////////////////
	/// Token Verify
	/////////////////

	it("Token Verify - without error", function () {
		const response = token.verify(tk, "secret");

		expect(response == true);
	});

	it("Token Verify - with error", function () {
		try {
			token.verify(12);
		} catch (error) {
			expect(error.message).toBe("The data provided is not a String");
		}
	});

	it("Token Verify - with error", function () {
		try {
			token.verify(tk, undefined);
		} catch (error) {
			expect(error.message).toBe("No data was entered");
		}
	});

});
