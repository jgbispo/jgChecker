const jgCheck = require("../index");

describe("Testing all functions", () => {

    /////////////////
    /// CheckArray
    /////////////////

    it("CheckArray - without error", function () {
        const array = ["obj-1", "obj-2", "obj-3"];

        return jgCheck.checkTypeOf.Array(array)
    });

    it("CheckArray - with error", function () {
        const array = ["obj-1", "obj-2", "obj-3"];
        try {
            jgCheck.checkTypeOf.Array("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a array")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkTypeOf.Array(und, "not a array", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckBoolean
    /////////////////

    it("CheckBoolean - without error", function () {
        const boolean = true;

        return jgCheck.checkTypeOf.Boolean(boolean)
    });

    it("CheckBoolean - with error", function () {
        const boolean = true;

        try {
            jgCheck.checkTypeOf.Boolean("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a boolean")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkTypeOf.Boolean(und, "not a boolean", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckFunction
    /////////////////

    it("CheckFunction - without error", function () {
        const fun = function test() { return };

        return jgCheck.checkTypeOf.Function(fun)
    });

    it("CheckFunction - with error", function () {
        try {
            jgCheck.checkTypeOf.Function("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a function")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkTypeOf.Function(und, "not a function", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckNumber
    /////////////////

    it("CheckFunction - without error", function () {
        const number = 12;

        return jgCheck.checkTypeOf.Number(number)
    });

    it("CheckFunction - with error", function () {
        try {
            jgCheck.checkTypeOf.Number("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a number")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkTypeOf.Number(und, "not a number", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckObject
    /////////////////

    it("CheckObject - without error", function () {
        const obj = { name: "João Gustavo" };

        return jgCheck.checkTypeOf.Object(obj)
    });

    it("CheckObject - with error", function () {
        try {
            jgCheck.checkTypeOf.Object("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a object")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkTypeOf.Object(und, "not a number", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    });

    /////////////////
    /// CheckString
    /////////////////

    it("CheckString - without error", function () {
        const string = "João Gustavo";

        return jgCheck.checkTypeOf.String(string)
    });

    it("CheckString - with error", function () {
        try {
            jgCheck.checkTypeOf.String("undefine")
        } catch (error) {
            expect(error.message).toBe("The data provided is not a string")
        }
    });

    it("CheckFunction - with error", function () {
        const und = undefined;

        try {
            jgCheck.checkTypeOf.String(und, "not a number", "No data")
        } catch (error) {
            expect(error.message).toBe("No data")
        }
    })
});