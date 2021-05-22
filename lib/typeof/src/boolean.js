function boolean(date, message, messageEmpty) {
    const check = typeof (date);

    if (check == "boolean") {
        return;
    }

    if (check == "undefined" || !date) {
        throw new Error(messageEmpty || "No data was entered")
    }

    throw new Error(messageEmpty || "The data provided is not a boolean")
}

module.exports = boolean;