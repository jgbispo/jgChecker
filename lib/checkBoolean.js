function checkBoolean(date, message) {
    const check = typeof (date);

    if (check == "boolean") {
        return;
    }
    if (check == "undefined"){
        throw new Error("No data was entered")
    }

    if (message) {
        throw new Error(message)
    } else {
        throw new Error("The data provided is not a boolean")
    }
}

module.exports = checkBoolean;