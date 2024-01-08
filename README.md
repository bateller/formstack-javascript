# Formstack API Wrapper for Node.js

This project provides a Node.js wrapper for the Formstack API, allowing easy interaction with Formstack resources such as forms and submissions in a Node.js environment. The wrapper simplifies the process of making HTTP requests to the Formstack API and handling responses.

## Installation

To use this wrapper, you need to have Node.js installed on your system. The wrapper is compatible with Node.js version 16.x.

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
const { FormsClient } = require('formstack-javascript/src/restAdapter');

const client = new FormsClient("<your-formstack-hostname>", "<your-api-token>");
```

Replace <your-formstack-hostname> and <your-api-token> with your actual Formstack hostname and API token.

## Examples
Here are some basic examples of how to use the wrapper:

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

## FAQ
### Q: Do I need a Formstack account to use this wrapper?

A: Yes, you need a Formstack account and an API token to interact with the Formstack API.

### Q: How do I handle errors?

A: The wrapper methods return promises. You can handle errors using .catch() or async/await with try/catch blocks.

### Q: Can I contribute to the development of this wrapper?

A: Absolutely! Contributions are welcome. Please refer to the contributing guidelines for more information.

## Contributing
Contributions to the Formstack API wrapper are welcome. Please ensure that your code adheres to the existing style and that all tests pass. If you're adding new features or fixing bugs, please include tests that cover these changes.
