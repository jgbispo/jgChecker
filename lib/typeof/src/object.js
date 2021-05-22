function obj(date, message, messageEmpty) {
    const check = typeof (date);

    if (check == "object") {
        return;
    }

    if (check == "undefined" || !date) {
        throw new Error(messageEmpty || "No data was entered")
    }

    throw new Error(message || "The data provided is not a object")
}

module.exports = obj;