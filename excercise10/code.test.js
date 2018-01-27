const net = require('net');

const dt = require('./code');

describe('The server should', () => {
  let client;
  beforeEach(() => {
    if (!dt.server.listening) {
      dt.startServer();
    }
    client = new net.Socket();
    client.connect(dt.port, 'localhost');
  });

  afterEach(() => {
    client.destroy();
    dt.stopServer();
  });

  it('return a string with non zero length', () => {
    client.on('data', (data) => {
      expect(data.length > 0).toBeTruthy();
    });
  });

  it('return a string with valid format', () => {
    client.on('data', (data) => {
      const entries = data.match(/^\d\d\d\d-\d\d-\d\d \d\d:\d\d$/);
      expect(entries.length === 1).toBeTruthy();
    });
  });
});
