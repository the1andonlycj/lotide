//AssertEqual function:
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};
//EqArrays function:
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

//Check keys against each other
//Check values against each other

const eqObjects = function(object1, object2) {
  const keysArr1 = Object.keys(object1);
  const keysArr2 = Object.keys(object2); //these are arrays of the keys, but not with accompanying values
  if (keysArr1.length !== keysArr2.length) {
    return false;
  }
  for (key of keysArr1) { //looping through all the keys in object 1 --referenced using the array from above to give us our keys to check.
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { //checking to see if they're both arrays
      //go to equal array func
      if(!eqArrays(object1[key], object2[key])) {
        return false;
      }
    }
    else if (object1[key] !== object2[key]) { //if they're not arrays, they're single values, so compare them piecemeal
      return false;
    }
  }
  return true; //if it has survived all of the above checks, it returns true.
};




//testers:
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
