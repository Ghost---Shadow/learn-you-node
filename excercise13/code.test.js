const http = require('http');

const dt = require('./code');

const options = {
  host: 'localhost',
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

  it('handle the parsetime endpoint', () => {
    options.path = '/api/parsetime?iso=2013-08-10T12:10:15.474Z';
    const expectedOutput = {
      hour: 12,
      minute: 10,
      second: 15,
    };

    http.request(options, (response) => {
      let body = '';
      response.on('data', (data) => {
        body += data;
      });

      response.on('end', () => {
        const receivedObject = JSON.parse(body);
        expect(receivedObject).toBe(expectedOutput);
        dt.stopServer();
      });
    }).end();
  });
  it('handle the unixtime endpoint', () => {
    options.path = '/api/unixtime';
    const expectedOutput = /\d+/;

    http.request(options, (response) => {
      let body = '';
      response.on('data', (data) => {
        body += data;
      });

      response.on('end', () => {
        const receivedObject = JSON.parse(body);
        expect(receivedObject.unixtime).toMatch(expectedOutput);
        dt.stopServer();
      });
    }).end();
  });
});
