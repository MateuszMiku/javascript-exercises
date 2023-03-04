const sumAll = function(x, y) {
	if (x < 0 || y < 0 || !Number.isInteger(x)
	 || !Number.isInteger(y)) {
	return "ERROR";
		} else {
			if (x < y) {
				let summed = 0;
					for (i = x; i<=y; i++) {
						summed += i;
					}
				return summed;
			} else if (x > y) {
				let summed = 0;
					for (i = y; i<=x; i++) {
						summed += i;
					}
				return summed;
			}
}};

// Do not edit below this line
module.exports = sumAll;

