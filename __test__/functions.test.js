const jgCheck = require("../index");

describe("Testing all functions", () => {

    /////////////////
    /// CheckArray
    /////////////////

    it("CheckArray - without error", function () {
        const array = ["obj-1", "obj-2", "obj-3"];

        return jgCheck.checkArray(array)
    });

    it("CheckArray - with error", function () {
        const array = ["obj-1", "obj-2", "obj-3"];
        try {
            jgCheck.checkArray("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a array")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkArray(und, "not a array", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckBoolean
    /////////////////

    it("CheckBoolean - without error", function () {
        const boolean = true;

        return jgCheck.checkBoolean(boolean)
    });

    it("CheckBoolean - with error", function () {
        const boolean = true;

        try {
            jgCheck.checkBoolean("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a boolean")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkBoolean(und, "not a boolean", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckFunction
    /////////////////

    it("CheckFunction - without error", function () {
        const fun = function test() { return };

        return jgCheck.checkFunction(fun)
    });

    it("CheckFunction - with error", function () {
        try {
            jgCheck.checkFunction("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a function")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkFunction(und, "not a function", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckNumber
    /////////////////

    it("CheckFunction - without error", function () {
        const number = 12;

        return jgCheck.checkNumber(number)
    });

    it("CheckFunction - with error", function () {
        try {
            jgCheck.checkNumber("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a number")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkNumber(und, "not a number", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckObject
    /////////////////

    it("CheckObject - without error", function () {
        const obj = { name: "João Gustavo" };

        return jgCheck.checkObject(obj)
    });

    it("CheckObject - with error", function () {
        try {
            jgCheck.checkObject("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a object")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkObject(und, "not a number", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckString
    /////////////////

    it("CheckString - without error", function () {
        const string = "João Gustavo";

        return jgCheck.checkString(string)
    });

    it("CheckString - with error", function () {
        try {
            jgCheck.checkString("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a string")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkString(und, "not a number", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    })
});