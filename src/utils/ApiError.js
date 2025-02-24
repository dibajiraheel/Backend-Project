class ApiError extends Error {
    constructor(message, statusCode, stack='', errors){
        super(message)
        this.statusCode = statusCode
        this.stack = stack
        this.message = message
        this.errors = errors
        this.data = null
        this.success = false
    }
}

export {ApiError}