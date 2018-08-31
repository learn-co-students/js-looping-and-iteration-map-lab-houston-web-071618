// Code your solution in this file.

const drivers = [
        { name: 'Bobby',   hometown: 'Pittsburgh'  },
        { name: 'Sammy',   hometown: 'New York'    },
        { name: 'Sally',   hometown: 'Cleveland'   },
        { name: 'Annette', hometown: 'Los Angeles' },
        { name: 'Bobby',   hometown: 'Tampa Bay'   }
      ];

function lowerCaseDrivers(drivers) {
	const lower = drivers.map(function(el) {
		return el.toLowerCase();
	});
	return lower;
}

function nameToAttributes(drivers) {
	return drivers.map(function(el) {
		let firstName = el.split(" ")[0];
		let lastName = el.split(" ")[1];
		
		return {firstName, lastName}
	});
}

function attributesToPhrase(drivers) {
	return drivers.map(function(el) {
		return `${el.name} is from ${el.hometown}`
	});
}




