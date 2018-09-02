// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const low = drivers.map(function(driver) {
    return driver.toLowerCase()
  })
  return low
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const first = driver.split(" ")[0]
    const last = driver.split(" ")[1]
    return {firstName: first, lastName: last}

  }
)}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    // console.log(driver)
    const name = driver.name
    const home = driver.hometown
    return `${name} is from ${home}`
  }
)}
