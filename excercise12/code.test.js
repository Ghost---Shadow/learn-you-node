const http = require('http');

const dt = require('./code');

const options = {
  host: 'localhost',
  path: '/',
  port: dt.port,
  method: 'post',
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

  it('take hello and return HELLO', () => {
    const input = 'hello';
    const expectedOutput = 'HELLO';
    options.body = input;
    http.request(options, (res) => {
      const bodyChunks = [];
      res.on('data', (chunk) => {
        bodyChunks.push(chunk);
      }).on('end', () => {
        const body = Buffer.concat(bodyChunks).toString();
        expect(body).toBe(expectedOutput);
        dt.stopServer();
      });
    });
  });

  it('take empty string and return empty string', () => {
    const input = '';
    const expectedOutput = '';
    options.body = input;
    http.request(options, (res) => {
      const bodyChunks = [];
      res.on('data', (chunk) => {
        bodyChunks.push(chunk);
      }).on('end', () => {
        const body = Buffer.concat(bodyChunks).toString();
        expect(body).toBe(expectedOutput);
        dt.stopServer();
      });
    });
  });

  it('take 123 and return 123', () => {
    const input = '';
    const expectedOutput = '';
    options.body = input;
    http.request(options, (res) => {
      const bodyChunks = [];
      res.on('data', (chunk) => {
        bodyChunks.push(chunk);
      }).on('end', () => {
        const body = Buffer.concat(bodyChunks).toString();
        expect(body).toBe(expectedOutput);
        dt.stopServer();
      });
    });
  });

  it('take AAA and return AAA', () => {
    const input = '';
    const expectedOutput = '';
    options.body = input;
    http.request(options, (res) => {
      const bodyChunks = [];
      res.on('data', (chunk) => {
        bodyChunks.push(chunk);
      }).on('end', () => {
        const body = Buffer.concat(bodyChunks).toString();
        expect(body).toBe(expectedOutput);
        dt.stopServer();
      });
    });
  });
});
