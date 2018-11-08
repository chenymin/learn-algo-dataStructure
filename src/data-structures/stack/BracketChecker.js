import Stack from './Stack';

export default class BracketChecker {
  constructor() {
    this.stack = new Stack();
  }

  check(str) {
    let isMatch = false;
    const map = new Map([
      ['{', '}'],
      ['[', ']'],
      ['(', ')']
    ]);
    const keys = [...map.keys()];
    const values = [...map.values()];
    for (let i = 0, len = str.length; i < len; i++) {
      const ch = str.charAt(i);
      if (keys.includes(ch)) {
        this.stack.push(ch);
      } else if (values.includes(ch)) {
        if (!this.stack.isEmpty()) {
          const chx = this.stack.pop();
          // 遇到)括号出栈,并从map里面找到)括号需要配对的(括号，相等则匹配成功
          const needKey = [...map.entries()].filter((el) => {
            return el[1] === ch;
          }).pop().shift();
          isMatch = needKey === chx;
        }
      }
    }
    return isMatch && this.stack.isEmpty();
  }
}
