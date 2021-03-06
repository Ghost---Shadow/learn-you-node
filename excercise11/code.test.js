const http = require('http');

const dt = require('./code');

const options = {
  host: 'localhost',
  path: '/',
  port: dt.port,
};

describe('The server should', () => {
  beforeEach(() => {
    if (!dt.server.listening) {
      dt.startServer();
    }
  });

  afterEach(() => {
    dt.stopServer();
  });

  it('return a string Hello world', () => {
    http.get(options, (res) => {
      const bodyChunks = [];
      res.on('data', (chunk) => {
        bodyChunks.push(chunk);
      }).on('end', () => {
        const body = Buffer.concat(bodyChunks).toString();
        const expectedOutput = 'Hello world';

        expect(body).toBe(expectedOutput);
        dt.stopServer();
      });
    });
  });

  it('return a string with non zero length', () => {
    http.get(options, (res) => {
      const bodyChunks = [];
      res.on('data', (chunk) => {
        bodyChunks.push(chunk);
      }).on('end', () => {
        const body = Buffer.concat(bodyChunks).toString();
        expect(body.length > 0).toBeTruthy();
        dt.stopServer();
      });
    });
  });
});
