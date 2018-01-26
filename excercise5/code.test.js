const ls = require('./code');

describe('The directory should', () => {
  const ext = 'txt';
  it('have two files', () => {
    const expected = ['test1.txt', 'test2.txt'];
    let i = 0;
    function callback(err, data) {
      expect(data).toBe(expected[i]);
      i += 1;
    }
    ls('./test', ext, callback);
  });
  it('not exist', () => {
    function callback(err) {
      expect(err.errno).toBe(-4058);
    }
    ls('./DOES_NOT_EXIST', ext, callback);
  });
  it('have no files', () => {
    const expected = [];
    let i = 0;
    function callback(err, data) {
      expect(data).toBe(expected[i]);
      i += 1;
    }
    ls('./test/test', ext, callback);
  });
});
