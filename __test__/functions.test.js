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

});