function number(date, message, messageEmpty) {
	const check = typeof (date);

	if (check == "number") {
		return;
	}

	if (check == "undefined" || !date) {
		throw new Error(messageEmpty || "No data was entered");
	}

	throw new Error(message || "The data provided is not a number");
}

module.exports = number;