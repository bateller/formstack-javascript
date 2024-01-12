class FormstackException extends Error {
    constructor(message) {
        super(message);
        this.name = "FormstackException";
    }
}

module.exports = { FormstackException };
