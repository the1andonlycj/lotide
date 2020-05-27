//New eqArrays function:
function eqArrays(array1, array2) {
  //turn each array into a string
  let string1 = array1.toString(); 
  let string2 = array2.toString();
  console.log("String1 is: " + string1);
  console.log("String2 is: " + string2);
  //compare strings
  if (string1 === string2){
    return true;
  } else {
    return false;
  }
} 

//New assertArraysEqual function:
function assertArraysEqual(array1, array2) {
  //turn each array into a string
  let string1 = array1.toString(); 
  let string2 = array2.toString();
  //compare strings
  if (string1 === string2){
    return true;
  } else {
    return false;
  }
} 


//MIDDLE function:
function middle(array) {
let middleArray = [];
  //CHECK: LENGTH MUST BE GREATER THAN 2.
  if (array.length < 3) {
    return middleArray;
  } else {
    //instance for EVEN lengths
    if(array.length % 2 === 0){
      let middleHigh = Math.round(array.length/2);
      middleArray.push(array[middleHigh]);
      middleArray.push(array[middleHigh - 1]);
      return middleArray;
    } else {
      let middle = Math.round(array.length/2) - 1;
      //Length/2, rounded, minus 1 will give us the middle value
      middleArray.push(array[middle]);
      return middleArray;
    }
  }
}
console.log(middle([133, 4, 10000, 17, 8, 99, 12, 18, 1888]));