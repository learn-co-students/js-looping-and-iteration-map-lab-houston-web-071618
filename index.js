// Code your solution in this file.
function lowerCaseDrivers(driversArray) {
  return driversArray.map(driver => driver.toLowerCase())
}

function nameToAttributes(driversArray) {
  return driversArray.map(driver => {
    nameArray = driver.split(' ')
    return {firstName: nameArray[0], lastName: nameArray[1]}
  })
}

function attributesToPhrase(driversObject) {
  return driversObject.map(driverObject => `${driverObject['name']} is from ${driverObject['hometown']}`)
}
