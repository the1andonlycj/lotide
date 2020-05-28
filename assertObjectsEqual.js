const inspect = require('util').inspect;

//EQARRAYS
const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    const resultsArray = ["fail", array1, array2];
    return resultsArray;
  } else {
    for (var i = 0; i < array1.length; i ++) {
      if (array1[i] !== array2[i]) {
        const resultsArray = ["fail", array1, array2];
        return resultsArray;
      }
    }
  }
  const resultsArray = ["pass", array1, array2];
  return resultsArray;
};

//ASSERTARRAYSEQUAL
const assertArraysEqual = function(array1, array2) {
  return assertEqual(eqArrays(array1, array2));
}

//EQOBJECTS
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

//ASSERTOBJECTSEQUAL
const assertObjectsEqual = function(actual, expected) {
  //Call those other functions above... to check the pieces, then output user friendly response 
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`); 
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

const ab = { x: "1", b: "2" };
const ba = { x: "2", a: "1" };

assertObjectsEqual(ab, ba);