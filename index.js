// Code your solution here:

function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function(driver) {
   return driver["revenue"] > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue){
  driverArray = driversWithRevenueOver(drivers, revenue);
  return driverArray.map(function(driver) {
    return driver["name"];
  });
}

function exactMatch(drivers, object) {
 return drivers.filter(function(driver) {
   let match;

   for(const key in object) {
     match = driver[key] === object[key];
   };
   return match
 });
}

function exactMatchToList(drivers, object) {
  driverArray = exactMatch(drivers, object);
  return driverArray.map(function(driver) {
    return driver["name"];
  });
}
