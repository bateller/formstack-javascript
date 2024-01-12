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
        const fullUrl = this.url + endpoint;
        const headers = {
            'Authorization': 'Bearer ' + this.token,
            'Accept': 'application/json',
        };

        try {
            this.logger.debug(`method=${method}, url=${fullUrl}, params=${params}`);
            const response = await axios({
                method: method,
                url: fullUrl,
                headers: headers,
                params: params,
                data: data,
                validateStatus: function (status) {
                    return status < 500; // Resolve only if the status code is less than 500
                }
            });

            if (response.status >= 200 && response.status < 300) {
                this.logger.debug(`Success: ${response.status}`);
                return new Result(response.status, 'Success', response.data);
            } else {
                this.logger.error(`Error: ${response.status}`);
                throw new FormstackException(`${response.status}: ${response.statusText}`);
            }
        } catch (error) {
            this.logger.error(error.message);
            throw new FormstackException('Request failed');
        }
    }

    getForm(id = '', detail = 'basic', params = null) {
        let urlpath = id ? `/${id}/${detail}` : '';
        return this.request('GET', `form${urlpath}.json`, params);
    }

    postForm(data) {
        return this.request('POST', 'form.json', null, data);
    }

    updateForm(id, data) {
        if (!id) throw new FormstackException('Form ID is required for update.');
        return this.request('PUT', `form/${id}.json`, null, data);
    }

    deleteForm(id) {
        if (!id) throw new FormstackException('Form ID is required for deletion.');
        return this.request('DELETE', `form/${id}.json`);
    }

    createFormSubmission(formId, data) {
        if (!formId) throw new FormstackException('Form ID is required for creating a submission.');
        return this.request('POST', `form/${formId}/submission.json`, null, data);
    }

    getSubmission(submissionId) {
        if (!submissionId) throw new FormstackException('Submission ID is required for retrieval.');
        return this.request('GET', `submission/${submissionId}.json`);
    }

    updateSubmission(submissionId, data) {
        if (!submissionId) throw new FormstackException('Submission ID is required for update.');
        return this.request('PUT', `submission/${submissionId}.json`, null, data);
    }

    deleteSubmission(submissionId) {
        if (!submissionId) throw new FormstackException('Submission ID is required for deletion.');
        return this.request('DELETE', `submission/${submissionId}.json`);
    }

    getFolder(id = '', params = null) {
        const urlPath = id ? `/${id}` : '';
        return this.request('GET', `folder${urlPath}.json`, params);
    }

    createFolder(data) {
        return this.request('POST', 'folder.json', null, data);
    }

    updateFolder(id, data) {
        if (!id) throw new FormstackException('Folder ID is required for update.');
        return this.request('PUT', `folder/${id}.json`, null, data);
    }

    deleteFolder(id) {
        if (!id) throw new FormstackException('Folder ID is required for deletion.');
        return this.request('DELETE', `folder/${id}.json`);
    }

    getField(id) {
        if (!id) throw new FormstackException('Field ID is required for retrieval.');
        return this.request('GET', `field/${id}.json`);
    }

    updateField(id, data) {
        if (!id) throw new FormstackException('Field ID is required for update.');
        return this.request('PUT', `field/${id}.json`, null, data);
    }

    deleteField(id) {
        if (!id) throw new FormstackException('Field ID is required for deletion.');
        return this.request('DELETE', `field/${id}.json`);
    }

    getFormFields(formId) {
        if (!formId) throw new FormstackException('Form ID is required for retrieving fields.');
        return this.request('GET', `form/${formId}/field.json`);
    }

    createFormField(formId, data) {
        if (!formId) throw new FormstackException('Form ID is required for creating a field.');
        return this.request('POST', `form/${formId}/field.json`, null, data);
    }
}

module.exports = FormsClient;
