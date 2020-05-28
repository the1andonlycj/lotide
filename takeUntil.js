//Original AssertEqual function:
const assertEqual = function(resultsArray) {
  console.log(resultsArray);
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

//AssertArraysEqual function:
const assertArraysEqual = function(array1, array2) {
  return assertEqual(eqArrays(array1, array2));
}

//TakeUntil function:
const takeUntil = function(array, callback) {
  let answerArray = [];
  for(element of array) {
    if (callback(element) === false) {
      answerArray.push(element);
    } else {
      return answerArray;
    }
  };
  return answerArray;
}

