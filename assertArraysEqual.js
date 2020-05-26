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
console.log(assertArraysEqual([0, 2, 3], [1, 2, 3])); 