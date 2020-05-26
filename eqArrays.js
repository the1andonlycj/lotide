//Original AssertEqual function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

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
assertEqual(eqArrays([1, 2, 3, 8], [1, 2, 3]), true); 


