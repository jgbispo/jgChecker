function checkArray(date, message, messageEmpty) {
    const check = typeof (date);

    if (check == "object") {
        if (date.length) {
            return;
        }
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
        throw new Error("The data provided is not a array")
    }
}

module.exports = checkArray;