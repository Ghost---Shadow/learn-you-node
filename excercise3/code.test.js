const counter = require('./code');

describe('When the file', () => {
  it('has 5 new lines', () => {
    expect(counter('./excercise3/test1.txt')).toBe(5);
  });
  it('has 0 new lines', () => {
    expect(counter('./excercise3/test2.txt')).toBe(0);
  });
});
