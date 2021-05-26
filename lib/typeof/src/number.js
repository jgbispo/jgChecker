function number(date, message, messageEmpty) {
	const check = typeof (date); // After receiving the data, the type of data that is
	
	// Check if it is a number
	if (check == "number") {
		return;
	}

	// Check if the parameter passed is empty
	if (check == "undefined" || !date) {
		// Returns an error if it is empty. The error can be customized
		throw new Error(messageEmpty || "No data was entered");
	}

	// Returns an error if it is not a number. The error can be customized
	throw new Error(message || "The data provided is not a number");
}

module.exports = number;