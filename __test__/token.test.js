/* eslint-disable no-undef */
const { token } = require("../index");

describe("Testing all functions Token", () => {
	var tk;

	/////////////////
	/// Token Sign
	/////////////////

	it("Token Sign - without error", function () {
		tk = token.sign({ id: "20ab" }, "secret");

		expect(tk != undefined);
	});

	it("Token Sign - with error", function () {
		try {
			token.sign(15);
		} catch (error) {
			expect(error.message).toBe("The data provided is not a object");
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

	it("Token Verify Timestamp - without error", function () {
		const response = token.verify(tk, "secret");

		expect(response == true);
	});

	it("Token Verify Timestamp - with error", async function () {
		try {
			token.verify("eyJhbGciOiJIUzI1NiJ9.eyJpZCI6Im9rIiwiZXhwIjoxNjIxNzQ3NzMxfQ.0xaa3M9AKnq_spc8gcPFnS4gAKrYil-dWdY3JFxoU5E", "secret");
		} catch (error) {
			expect(error.message).toBe("Token expired");
		}
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

	/////////////////
	/// Token Decode
	/////////////////

	it("Token Decode - without error", function () {
		const response = token.decode(tk);

		expect(response).toMatchObject({
			payload: { "id": "20ab" },
		});
	});

	it("Token Decode - with error", function () {
		try {
			token.decode(12);
		} catch (error) {
			expect(error.message).toBe("The data provided is not a String");
		}
	});

	it("Token Decode - with error", function () {
		try {
			token.decode(undefined);
		} catch (error) {
			expect(error.message).toBe("No data was entered");
		}
	});

});
