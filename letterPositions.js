/* //Assert Equal:
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
    return true;
  } else {
    return false;
  }
} 
 */

 //Letter positions function:
const letterPositions = function(sentence) {
  const lowerCaseSentence = sentence.toLowerCase();
  let index = 0;
  const results = {};
  for (const letter of lowerCaseSentence) { 
    if (letter === ' ' || letter === "." || letter === "!" || letter === "?") {
      continue;
    }
    if (results[letter]) { 
      results[letter].push(index);
    } else {
      results[letter] = [index]; 
    }
    index += 1;
  }
  return results;
};
console.log(letterPositions("Whatever you like goes here."));