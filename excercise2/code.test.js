const add = require('./code');

describe('When passed an array which', () => {
  it('has only numbers', () => {
    expect(add([1, 2, 3, 4, 5])).toBe(12);
  });
  it('has both numbers and string', () => {
    expect(add(['a', 'b', 3, 4, 5])).toBe(12);
  });
  it('has undefined', () => {
    expect(add([undefined, 'b', 3, 4, 5])).toBe(12);
  });
  it('is undefined', () => {
    expect(add([undefined, undefined, undefined, undefined, undefined])).toBeFalsy();
  });
  it('is of length 0', () => {
    expect(add([])).toBe(0);
  });
});
