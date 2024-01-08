function compareArrays(arr1, arr2) {
  if(arr1.length !== arr2.length){
    return false;
  }
  return arr1.every((value, index) => value === arr2[index]);
}




function getUserNamesInAgeRange(users, gender) {
  return users.filter(user => user.gender === gender)
.map(user => user.age)
.reduce((acc, age, index, arr) => acc + age / arr.length, 0);
}
