function boolean(date, message, messageEmpty) {
	const check = typeof (date); // After receiving the data, the type of data that is

	// Check if it is a boolean
	if (check == "boolean") {
		return;
	}

	// Check if the parameter passed is empty
	if (check == "undefined" || !date) {
		// Returns an error if it is empty. The error can be customized
		throw new Error(messageEmpty || "No data was entered");
	}

	// Returns an error if it is not a boolean. The error can be customized
	throw new Error(messageEmpty || "The data provided is not a boolean");
}

module.exports = boolean;