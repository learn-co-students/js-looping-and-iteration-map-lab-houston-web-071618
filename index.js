// Code your solution in this file.
function lowerCaseDrivers(collection)
{
  return result = collection.map(function(name){
   return name.toLowerCase()
 });
}//lowerCaseDrivers

function nameToAttributes(collection, name)
{
  return result = collection.map(function(name){
    const first = name.split(" ")[0];
    const last = name.split(" ")[1];
    return { firstName: first, lastName: last };
 });
}//nameToAttributes

function attributesToPhrase(collection)
{
  return collection.map(function(obj){
    return `${obj.name} is from ${obj.hometown}`;
  });

}//attributesToPhrase
