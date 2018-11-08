import BracketCheck from '../BracketChecker';

describe('栈匹配字符窜', () => {
  it('should true', () => {
    const bracketCheck = new BracketCheck();
    expect(bracketCheck.check('()')).toEqual(true);
    expect(bracketCheck.check('(}')).toEqual(false);
    expect(bracketCheck.check('[{({})}]')).toEqual(true);
    expect(bracketCheck.check('[{({})}')).toEqual(false);
    expect(bracketCheck.check('[{({})}]}')).toBe(false);
    expect(bracketCheck.check('(foo { bar (baz) [boo] })')).toBe(true);
  });
});
