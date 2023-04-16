const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  str: '',
  separator: '~~',
  getLength() {
    let arr = this.str.split('~~');
    arr.pop();
    return arr.length;
  },
  addLink(value) {
    this.str += `( ${value} )${this.separator}`
    return this
  },
  removeLink(pos) {
    if (typeof pos !== 'number' || pos > this.str.split('~~').length - 1 || pos < 1 || pos % 1 !== 0) {
      throw new Error('You can\'t remove incorrect link!')
    }
    let arr = this.str.split('~~')
    arr.pop()
    arr.splice(pos - 1, 1);
    this.str = arr.join('~~')
    this.str += this.separator
    return this
  },
  reverseChain() {
    let arr = this.str.split('~~');
    arr.pop();
    this.str = arr.reverse().join('~~') + this.separator
    return this
  },
  finishChain() {
    this.str = this.str.substring(0, this.str.length - 2);
    return this.str;
  }
};

module.exports = {
  chainMaker
};
