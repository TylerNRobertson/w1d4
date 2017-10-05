var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];
students.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return 1;
  }
  if (nameA > nameB) {
    return -1;
  }

  // names must be equal
  return 0;
});
console.log(students)








/*students.sort(function(a, b) {
  return a.age - b.age
})
console.log(students);
















/*var myarr = [1, 2, 5, 9, 10];
myarr.sort(function(a , b){
  return a - b;
})
console.log(myarr) */