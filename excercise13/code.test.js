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

  it('handle the parsetime endpoint', (done) => {
    options.path = '/api/parsetime?iso=2013-08-10T12:10:15.474Z';
    const expectedOutput = {
      hour: '12',
      minute: '10',
      second: '15',
    };

    http.request(options, (response) => {
      let body = '';
      response.on('data', (data) => {
        body += data;
      });

      response.on('end', () => {
        const receivedObject = JSON.parse(body);
        expect(receivedObject).toEqual(expectedOutput);
        done();
        dt.stopServer();
      });
    }).end();
  });
  it('handle the unixtime endpoint', (done) => {
    options.path = '/api/unixtime';
    const expectedOutput = /\d+/;

    http.request(options, (response) => {
      let body = '';
      response.on('data', (data) => {
        body += data;
      });

      response.on('end', () => {
        const receivedObject = JSON.parse(body);
        expect(String(receivedObject.unixtime)).toMatch(expectedOutput);
        done();
        dt.stopServer();
      });
    }).end();
  });
});
