const http = require('http');

const requestListener = (reequest, response) => {
    response.statusCode = 404;   //Memberitahu client bahwa request resource yang diminta tidak ada.
    response.statusMessage = 'User is not found';  //404 Defaultnya adalah 'Not Found'
};