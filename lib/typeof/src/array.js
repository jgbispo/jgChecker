function array(date, message, messageEmpty) {
    const check = typeof (date);

    if (check == "object") {
        if (date.length) {
            return;
        }
    }

    if (check == "undefined" || !date) {
        throw new Error(messageEmpty || "No data was entered")
    }

    throw new Error(messageEmpty || "The data provided is not a array")
}

module.exports = array;