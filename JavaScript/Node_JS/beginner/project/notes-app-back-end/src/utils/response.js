const response = (res, statusCode, message, data) => {
    return res
    .statusCode(statusCode)
    .json({
        code: statusCode,
        status: statusCode < 400 ? 'success' : 'failed',
        message,
        data,
    })
    .end();
}

export default response;