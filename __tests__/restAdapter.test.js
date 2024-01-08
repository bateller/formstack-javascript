const FormsClient = require('../src/restAdapter');

describe('FormsClient', () => {
    let client;

    beforeAll(() => {
        client = new FormsClient('hostname', 'token');
        // Mock axios or other dependencies needed
    });

    test('getForm should return form data', async () => {
	// TODO: Write test
    });

    // TODO: Write more tests...
});
