//MIDDLE function:
const middle = function(array) {
let middleArray = [];
  //CHECK: LENGTH MUST BE GREATER THAN 2.
  if (array.length < 3) {
    //at this point, middleArray is empty, so it's not doing anything, really
    return middleArray;
  } else {
    //instance for EVEN lengths
    if(array.length % 2 === 0){
      let middleHigh = Math.round(array.length/2);
      middleArray.push(array[middleHigh - 1]);
      middleArray.push(array[middleHigh]);
      return middleArray;
    } else {
      let middle = Math.round(array.length/2) - 1;
      //Length/2, rounded, minus 1 will give us the middle value
      middleArray.push(array[middle]);
      return middleArray;
    }
  }
}

module.exports = middle;