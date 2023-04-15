const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!');
  }

  const controlObj = {
    discardNext: '--discard-next',
    discardPrev: '--discard-prev',
    doubleNext: '--double-next',
    doublePrev: '--double-prev'
  }

  let newArr = []

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    if(arr[i] === controlObj.discardNext) {
      i = i + 1;
    }
    else if(arr[i] === controlObj.discardPrev) {
      newArr.splice(i - 1, 1);
    }
    else if(arr[i] === controlObj.doubleNext) {
      if (i === arr.length - 1) {
        continue
      }
      newArr[i] = arr[i + 1] 
    }
    else if(arr[i] === controlObj.doublePrev) {
      if (i === 0) {
        continue;
      }
      newArr[i] = newArr[i - 1]
    } else {
      newArr.push(arr[i]);
    }
  }
  let filtered = newArr.filter(Boolean)
  return filtered
}

module.exports = {
  transform
};
