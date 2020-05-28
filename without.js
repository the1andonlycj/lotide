//Original AssertEqual function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};  


//AssertArraysEqual function:
 function assertArraysEqual(array1, array2) {
  //turn each array into a string
  let string1 = array1.toString(); 
  let string2 = array2.toString();
  //compare strings
  if (string1 === string2){
    console.log(true);
  } else {
    console.log(false);
  }
} 





//Write a new array one element at a time, omitting the element that shouldn't be there. Built in array functions */

function without(source, itemsToRemove) {
  let withoutArray = [];
  for (let i = 0; i < source.length; i ++) {
    if (!itemsToRemove.includes(source[i])){
      withoutArray.push(source[i]);
    }
  }
  return withoutArray;
}

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
