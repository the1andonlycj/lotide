const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

//countLetters function:
function countLetters(words) {
  let letterCount = {}; //empty OBJECT to store results
  words = words.replace(/[^a-zA-Z0-9]/g,''); //"replacing" special characters with nothing
  let letterArray = Array.from(words.toLowerCase()); //converting all letters to lowercase
  for (const letter of letterArray) { //looping through letterArray
    if (letterCount[letter]) { //if it's a letter that's already in letterCount
      letterCount[letter] += 1; //add one to its total
    } else {
      letterCount[letter] = 1; //else create the letter as a key, then assign that key a value of 1
    }
  }
  return letterCount; //return the array as an output.
}



console.log(countLetters("a bb ccc dddd eeeee ffffff zzzzzzzzzzzzz /!,."));