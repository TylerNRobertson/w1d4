// map returns a new array of values when its used on another array
// function is required
// callback function to put the values in an array
var arr = [5, 2, 3, 4, 1];
var myMap = function(array, callback) {
  array.sort();
  putInArray();
  return array;
}
function putInArray(){
  var emptyArray = []
  emptyArray.push(arr)
}
console.log(myMap(arr));
