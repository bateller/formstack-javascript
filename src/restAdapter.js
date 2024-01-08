const axios = require('axios');
const { FormstackException } = require('./exceptions');
const { Result } = require('./models');

class FormsClient {
    constructor(hostname = "www.formstack.com", token = '', ver = 'v2', sslVerify = true, logger = console) {
        this.logger = logger;
        this.url = `https://${hostname}/api/${ver}/`;
        this.token = token;
        this.sslVerify = sslVerify;
    }

    async request(method, endpoint, params = null, data = null) {
	// TODO
    }

    getForm(id = '', detail = 'basic', params = null) {
	// TODO
    }

    // TODO
}

module.exports = FormsClient;
