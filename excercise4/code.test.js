const counter = require('./code');

describe('When the file', () => {
  function checkWrapper(expected) {
    return (data) => {
      expect(data).toBe(expected);
    };
  }

  it('has 5 new lines', () => {
    counter('./test/test1.txt', checkWrapper(5));
  });
  it('has 0 new lines', () => {
    counter('./test/test2.txt', checkWrapper(0));
  });
});
