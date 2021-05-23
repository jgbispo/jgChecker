/* eslint-disable no-undef */
const { checkTypeOf } = require("../index");

describe("Testing all functions typeOf", () => {

	/////////////////
	/// CheckArray
	/////////////////

	it("CheckArray - without error", function () {
		const array = ["obj-1", "obj-2", "obj-3"];

		return checkTypeOf.array(array);
	});

	it("CheckArray - with error", function () {
		try {
			checkTypeOf.array("undefine");
		} catch (error) {
			expect(error.message).toBe("The data provided is not a array");
		}
	});

	it("CheckFunction - with error", function () {
		const und = undefined;

		try {
			checkTypeOf.array(und, "not a array", "No data");
		} catch (error) {
			expect(error.message).toBe("No data");
		}
	});

	/////////////////
	/// CheckBoolean
	/////////////////

	it("CheckBoolean - without error", function () {
		const boolean = true;

		return checkTypeOf.boolean(boolean);
	});

	it("CheckBoolean - with error", function () {
		try {
			checkTypeOf.boolean("undefine");
		} catch (error) {
			expect(error.message).toBe("The data provided is not a boolean");
		}
	});

	it("CheckFunction - with error", function () {
		const und = undefined;

		try {
			checkTypeOf.boolean(und, "not a boolean", "No data");
		} catch (error) {
			expect(error.message).toBe("No data");
		}
	});

	/////////////////
	/// CheckFunction
	/////////////////

	it("CheckFunction - without error", function () {
		const fun = function test() { return; };

		return checkTypeOf.fun(fun);
	});

	it("CheckFunction - with error", function () {
		try {
			checkTypeOf.fun("undefine");
		} catch (error) {
			expect(error.message).toBe("The data provided is not a function");
		}
	});

	it("CheckFunction - with error", function () {
		const und = undefined;

		try {
			checkTypeOf.fun(und, "not a function", "No data");
		} catch (error) {
			expect(error.message).toBe("No data");
		}
	});

	/////////////////
	/// CheckNumber
	/////////////////

	it("CheckFunction - without error", function () {
		const number = 12;

		return checkTypeOf.number(number);
	});

	it("CheckFunction - with error", function () {
		try {
			checkTypeOf.number("undefine");
		} catch (error) {
			expect(error.message).toBe("The data provided is not a number");
		}
	});

	it("CheckFunction - with error", function () {
		const und = undefined;

		try {
			checkTypeOf.number(und, "not a number", "No data");
		} catch (error) {
			expect(error.message).toBe("No data");
		}
	});

	/////////////////
	/// CheckObject
	/////////////////

	it("CheckObject - without error", function () {
		const obj = { name: "João Gustavo" };

		return checkTypeOf.object(obj);
	});

	it("CheckObject - with error", function () {
		try {
			checkTypeOf.object("undefine");
		} catch (error) {
			expect(error.message).toBe("The data provided is not a object");
		}
	});

	it("CheckFunction - with error", function () {
		const und = undefined;

		try {
			checkTypeOf.object(und, "not a number", "No data");
		} catch (error) {
			expect(error.message).toBe("No data");
		}
	});

	/////////////////
	/// CheckString
	/////////////////

	it("CheckString - without error", function () {
		const string = "João Gustavo";

		return checkTypeOf.string(string);
	});

	it("CheckString - with error", function () {
		try {
			checkTypeOf.string("undefine");
		} catch (error) {
			expect(error.message).toBe("The data provided is not a string");
		}
	});

	it("CheckFunction - with error", function () {
		const und = undefined;

		try {
			checkTypeOf.string(und, "not a number", "No data");
		} catch (error) {
			expect(error.message).toBe("No data");
		}
	});
});