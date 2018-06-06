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
		arr.forEach(function(number){
			var result = number * number;
			squared.push(result);

		});
		return squared;
	},

	sum: function (arr) {
		var total = 0;
		arr.forEach(function(number){
			total += number;
		});
		return total;

	},

	findDuplicates: function (arr) {
		let duplicates = [];
		arr.forEach(function(number, index){
			if(arr.indexOf(number, index + 1) > -1){
				if(duplicates.indexOf(number) === -1 ){
					duplicates.push(number);
				}
			}

		});

		return duplicates;
	},

	removeAndClone: function (arr, valueToRemove) {
		let newArray = [];
		arr.forEach(function(item){
			if(item !== valueToRemove){
				newArray.push(item);
			}
		})
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		let indexArray = [];
		arr.forEach(function(number, index){
			if(number === itemToFind){
					indexArray.push(index);
				}
		});
		 return indexArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		let total = 0
			arr.forEach(function(number){
				if(number % 2 === 0){
					(total += (number * number));
				}
			});
	 return total;
}
}

module.exports = arrayTasks
