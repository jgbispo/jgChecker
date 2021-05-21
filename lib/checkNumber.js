function checkNumber(date, message) {
    const check = typeof (date);

    if (check == "number") {
        return;
    }
    if (check == "undefined"){
        throw new Error("No data was entered")
    }

    if (message) {
        throw new Error(message)
    } else {
        throw new Error("The data provided is not a number")
    }
}

module.exports = checkNumber;