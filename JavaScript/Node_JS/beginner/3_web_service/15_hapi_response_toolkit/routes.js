server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
        return h.response('created').code(201);
    },
});

//Detailed notation
const handler = (request, h) => {
    const respponse = h.response('success');
    response.type('text/plain');
    response.header('Custom-Header', 'some-value');
    return response;
}

//Chined notation 
// const handler = (request, h) => {
//     return.h.response('success')
//         .type('text/plain')
//         .header('Custom-Header', 'some-value')
// }