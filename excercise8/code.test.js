const httpGet = require('./code');

describe('When url is', () => {
  it('google.com', () => {
    httpGet('www.google.com', (data) => {
      if (typeof data === 'number') {
        expect(data > 0).toBeTruthy();
      } else if (typeof data === 'string') {
        expect(data.indexOf('google') > -1).toBeTruthy();
      }
    });
  });
  it('absolutelydoesnotexist.com', () => {
    httpGet('www.absolutelydoesnotexist.com', (data) => {
      expect(data).toBeFalsy();
    });
  });
});
