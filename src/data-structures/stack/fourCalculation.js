import Stack from './Stack';
/**
 * 四则元算 目前仅支持10位以内计算
 * 1:将中缀表达式3+2--->变为后缀表达式32+
 * 步骤
 * （1）从左到右逐个扫描中缀表达式中的各项，如果到达末尾则跳转转到（6），否则根据（2）~（5）的描述进行操作；
 *（2）遇到操作数直接输出；
 *（3）遇到运算符（设为a），则和栈顶的操作符（设为b）比较优先级，若a小于等于b的优先级，则连续出栈输出，直到a大于b的优先级或b为(，a进栈；
 *（4）遇到(，进栈；
 *（5）遇到)，则连续出栈输出，直到遇到左括弧(为止。其中，(出栈但是并不输出；
 *（6）输出栈中剩余的操作符。
 * 2:计算后缀表达式的值，遇到数字压栈，遇到操作符取出数字计算结果，压栈，重复此过程至循环结束，取出数据即最后结果
 */
export default class InToPost {
  constructor() {
    this.theStack = new Stack();
    this.output = [];
  }

  /**
   * 转换为后缀表达式
   */
  doTrans(str) {
    this.output = [];
    for (let i = 0, len = str.length; i < len; i++) {
      const ch = str.charAt(i);
      switch (ch) {
        case '+':
        case '-':
          this.getOper(ch, 1);
          break;
        case '*':
        case '/':
          this.getOper(ch, 2);
          break;
        case '(':
          this.theStack.push(ch);
          break;
        case ')':
          this.getParen();
          break;
        default:
          this.output.push(ch);
          break;
      }
    }
    while (!this.theStack.isEmpty()) {
      this.output.push(this.theStack.pop());
    }
    return this.output;
  }

  getOper(opThis, prec1) {
    while (!this.theStack.isEmpty()) {
      const opTop = this.theStack.pop();
      if (opTop === '(') {
        this.theStack.push(opTop);
        break;
      } else {
        let prec2 = 0;
        if (opTop === '+' || opTop === '-') {
          prec2 = 1;
        } else {
          prec2 = 2;
        }
        if (prec2 < prec1) {
          this.theStack.push(opTop);
          break;
        } else {
          this.output.push(opTop);
        }
      }
    }
    this.theStack.push(opThis);
  }

  getParen() {
    while (!this.theStack.isEmpty()) {
      const chx = this.theStack.pop();
      if (chx === '(') {
        break;
      } else {
        this.output.push(chx);
      }
    }
  }

  /**
   * 计算
   */
  calculation() {
    const caStack = new Stack();
    let num1 = 0;
    let num2 = 0;
    let ans = 0;
    let ch;
    for (let i = 0, len = this.output.length; i < len; i++) {
      ch = this.output[i];
      if (ch >= '0' && ch <= '9') {
        caStack.push(parseInt(ch));
      } else {
        num2 = caStack.pop();
        num1 = caStack.pop();
        switch (ch) {
          case '+':
            ans = num1 + num2;
            break;
          case '-':
            ans = num1 - num2;
            break;
          case '*':
            ans = num1 * num2;
            break;
          case '/':
            ans = num1 / num2;
            break;
          default:
            break;
        }
        caStack.push(ans);
      }
    }
    ans = caStack.pop();
    return ans;
  }
}
