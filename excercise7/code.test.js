const httpGet = require('./code');

describe('When url is', () => {
  it('google.com', () => {
    httpGet('www.google.com', (err, data) => {
      expect(err).toBeFalsy();
      expect(data.indexOf('google') > -1).toBeTruthy();
    });
  });
  it('absolutelydoesnotexist.com', () => {
    httpGet('www.absolutelydoesnotexist.com', (err, data) => {
      expect(err).toBeTruthy();
      expect(data).toBeFalsy();
    });
  });
});

