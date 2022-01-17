function findFirstDuplicate(arr) {
  const catcherArr = new Set();

  for(const num of arr){
    if (catcherArr.has(num)){
      return num;
    } 
    catcherArr.add(num)
  } return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 5");
  console.log("=>", findFirstDuplicate([1,2,3,4,5,5,6,7,8]));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));
}

module.exports = findFirstDuplicate;
/*
// Please add your pseudocode to this file
We start with an array as our argument.  We need to find the first duplicate integer and return it, otherwise, keep iterating.  If we reach the end return -1.  So we are doing a .find() method.
Use a for-of loop to iterate thru the array.
No matter what, we send all values to the catcherArr using the Set() ---> which sets a new object
Conditionally, if a num is already in the Set(), we return that num.  Otherwise, we get through the whole array and return -1.
// And a written explanation of your solution
*/