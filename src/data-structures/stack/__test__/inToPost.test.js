import InToPost from '../fourCalculation';

describe('IntoPost', () => {
  it('中缀转换为后缀表达式', () => {
    const inToPost = new InToPost();
    expect(inToPost.doTrans('2+3').toString()).toBe('2,3,+');
    expect(inToPost.calculation()).toEqual(5);
    expect(inToPost.doTrans('2+3*4').toString()).toBe('2,3,4,*,+');
    expect(inToPost.calculation()).toBe(14);
    expect(inToPost.doTrans('A*(B+C)').toString()).toBe('A,B,C,+,*');
    expect(inToPost.doTrans('A*(B+C)-D/(E+F)').toString()).toBe('A,B,C,+,*,D,E,F,+,/,-');
  });
});
