var arrayTasks = {

	concat: function (arr1, arr2) {
	var new_array =	arr1.concat(arr2);
	return new_array;
	},

	insertAt: function (arr, itemToAdd, index) {
 arr.splice(index, 0, itemToAdd);
 return arr;
	},

	square: function (arr) {
		var squared = [];
		for(number of arr){
			var result = number * number;
			squared.push(result);
		} return squared;
	},

	sum: function (arr) {
		var total = 0;
		for(number of arr){
			total += number;
		} return total;

	},

	findDuplicates: function (arr) {
		let duplicates = [];
		arr.forEach(function(element, index){
			if(arr.indexOf(element, index + 1) > -1){
				if(duplicates.indexOf(element) === -1 ){
					duplicates.push(element);
				}
			}

		});

		return duplicates;
	},

	// removeAndClone: function (arr, valueToRemove) {

	// },

	// findIndexesOf: function (arr, itemToFind) {

	// },

	// sumOfAllEvenNumbersSquared: function (arr) {

	// }

}

module.exports = arrayTasks
