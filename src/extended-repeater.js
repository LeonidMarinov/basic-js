const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator === undefined ? '+' : options.separator;
  let additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;

  function create (str, separator, times, counter = 1) {
    let separatorToAdd = counter === times ? '' : separator
    let newStr = str + separatorToAdd;
    if (times === counter) {
      return newStr
    }
    counter++
    return newStr + create(str, separator, times, counter)
  }
  let additonsStr = create(options.addition, additionSeparator, options.additionRepeatTimes)
  let wholeString = create(str + additonsStr, separator, options.repeatTimes);
  return wholeString;
}

module.exports = {
  repeater
};
