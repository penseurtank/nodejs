exports.constants = {
    /**
     * 400 – BAD REQUEST
     * The request was invalid or cannot be served. The exact error should be explained in the error payload.
     */
    VALIDATAION_ERROR: 400,
    /**
     * 401 – UNAUTHORIZED
     * The request requires user authentication.
     */
    UNAUTHRIZED:401,
    /**
     * 403 – FORBIDDEN
     * The server understood the request but is refusing it or the access is not allowed.
     */
    FORBIDDEN:403,
    /**
     * 404 – NOT FOUND
     * There is no resource behind the URI.
     */
    NOT_FOUND:404,
    
    /**
     * 500 – INTERNAL SERVER ERROR API
     * If an error occurs in the global catch blog, the stack trace should be logged and not returned as a response.
     */

    SERVER_ERROR:500,
};