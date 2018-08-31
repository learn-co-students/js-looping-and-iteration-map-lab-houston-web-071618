// Code your solution in this file.
function lowerCaseDrivers (array) {

  return array.map(function (item) {
    return item.toLowerCase();
  })

}

function nameToAttributes (array) {
  
  return array.map(function (item) {
    let nameArray = item.split(' ')
    return {firstName: nameArray[0], lastName: nameArray[1]}
  })

}


function attributesToPhrase (array) {

  return array.map (function (item) {
    return `${item.name} is from ${item.hometown}`
  })

}