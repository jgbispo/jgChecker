function checkString(date, message) {
    const check = typeof (date);

    if (check == "string") {
        return;
    }
    if (check == "undefined"){
        throw new Error("No data was entered")
    }

    if (message) {
        throw new Error(message)
    } else {
        throw new Error("The data provided is not a String")
    }
}

module.exports = checkString;