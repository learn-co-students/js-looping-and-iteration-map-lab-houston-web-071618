// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const lowerCaseDrivers = drivers.map(function (driver) { return driver.toLowerCase()
  })
  return lowerCaseDrivers
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    // const driverFullName = driver.split(' ')
    const driverFirst = driver.split(' ')[0]
    const driverLast = driver.split(' ')[1]
    // console.log({fullName: driverFullName})

    // console.log({firstName: driverFirst, lastName: driverLast})
    return {firstName: driverFirst, lastName: driverLast}

  })
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
