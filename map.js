//Original AssertEqual function:
const assertEqual = function(resultsArray) {
  if (resultsArray[0] === "pass") {
    console.log(`✅✅✅ Assertion Passed: ${resultsArray[1]} === ${resultsArray[2]}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${resultsArray[1]} !==  ${resultsArray[2]}`);
  }
};

//Added on eqArrays function:
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

//Added on AssertArraysEqual function
const assertArraysEqual = function(array1, array2) {
  return assertEqual(eqArrays(array1, array2));
}





const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(
  map(words, (word) => word[0]), //map can do a lot of different stuff, so these smaller arrow
  ['g', 'c', 't', 'm', 't'] //definitions allow us to switch it up more quickly, and then deploy the above.
);
assertArraysEqual(
  map(words, (word) => word.length),
  [6, 7, 2, 5, 3]
);
assertArraysEqual(
  map(words, (word) => word[0]),
  [1]
);