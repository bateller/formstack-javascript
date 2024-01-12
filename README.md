# Formstack API Wrapper for Node.js

This project provides a Node.js wrapper for the Formstack API, allowing easy interaction with Formstack resources such as forms and submissions in a Node.js environment. The wrapper simplifies the process of making HTTP requests to the Formstack API and handling responses.

## Installation

To use this wrapper, you need to have Node.js installed on your system. The wrapper is compatible with Node.js version 16.x and 21.5.

### Steps to Install:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/bateller/formstack-javascript.git
   cd formstack-javascript
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
## Setup
To set up the wrapper, you need to initialize a new instance of the FormsClient with your Formstack API token and other optional configurations.

Basic Usage:
```javascript
const FormsClient = require('./src/restAdapter');

const client = new FormsClient("<your-formstack-hostname>", "<your-api-token>");
```

Replace <your-formstack-hostname> and <your-api-token> with your actual Formstack hostname and API token.

## Examples
Here are some basic examples of how to use the wrapper:

#### Manage Forms
1. **Get a Form**:
```javascript
client.getForm("<form-id>")
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

2. **Create a Form**:
```javascript
const formData = {
  // Form data here
};

client.postForm(formData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

3. **Update a Form**:
```javascript
const updatedData = {
  // Updated form data here
};

client.updateForm("<form-id>", updatedData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

4. **Delete a Form**:
```javascript
client.deleteForm("<form-id>")
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

#### Manage Folders
5. **Get a Folder**:
```javascript
client.getFolder("<folder-id>")
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

6. **Create a Folder**:
```javascript
const folderData = {
  // folder data here
};

client.createFolder(folderData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

#### Manage Fields
7. **Get a Field**:
```javascript
client.getField("<field-id>")
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

8. **Update a Field**:
```javascript
const updatedData = {
  // Updated field data here
};

client.updateField("<field-id>", updatedData)
  .then(response => console.log(response))
  .catch(error => console.error(error));
```

## Full Example
### index.js
```javascript
const FormsClient = require('./src/restAdapter');

async function main() {
    const client = new FormsClient("www.formstack.com", "<my-api-key>");

    try {
        // Example: Get a specific form
        const formId = "3681241"; // My Form ID
        const response = await client.getForm(formId);
        console.log("Form Data:", response);

        // Add more operations as needed
    } catch (error) {
        console.error("Error:", error.message);
    }
}

main();
```

### Output
```bash
$ node index.js
method=GET, url=https://www.formstack.com/api/v2/form/3681241/basic.json, params=null
Success: 200
Form Data: Result {
  statusCode: 200,
  message: 'Success',
  data: {
    created: '2019-12-04 09:21:40',
    db: '1',
    deleted: '0',
    folder: '169221',
    id: '3681241',
    name: 'John Doe - Event Registration',
    num_columns: '1',
    progress_meter: '0',
    submissions: '0',
    submissions_unread: '0',
    updated: '2020-02-14 14:36:15',
    viewkey: '<some-view-key>',
    views: '5',
    language: 'en',
    url: 'https://<some-subdomain>.formstack.com/forms/john_doe__event_registration',
    encrypted: true,
    thumbnail_url: null,
    submit_button_title: 'Submit Registration',
    inactive: false,
    timezone: 'US/Eastern',
    should_display_one_question_at_a_time: false,
    can_access_1q_feature: true,
    is_workflow_form: false,
    is_workflow_published: false,
    has_approvers: false,
    edit_url: 'https://www.formstack.com/admin/form/builder/3681241/build'
  }
}
$
```

## FAQ
### Q: Do I need a Formstack account to use this wrapper?

A: Yes, you need a Formstack account and an API token to interact with the Formstack API.

### Q: How do I handle errors?

A: The wrapper methods return promises. You can handle errors using .catch() or async/await with try/catch blocks.

### Q: Can I contribute to the development of this wrapper?

A: Absolutely! Contributions are welcome. Please refer to the contributing guidelines for more information.

## Contributing
Contributions to the Formstack API wrapper are welcome. Please ensure that your code adheres to the existing style and that all tests pass. If you're adding new features or fixing bugs, please include tests that cover these changes.
