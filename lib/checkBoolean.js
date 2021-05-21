function checkBoolean(date, message, messageEmpty) {
    const check = typeof (date);

    if (check == "boolean") {
        return;
    }

    if (check == "undefined") {
        if (messageEmpty) {
            throw new Error(messageEmpty)
        } else {
            throw new Error("No data was entered")
        }
    }

    if (message) {
        throw new Error(message)
    } else {
        throw new Error("The data provided is not a boolean")
    }
}

module.exports = checkBoolean;