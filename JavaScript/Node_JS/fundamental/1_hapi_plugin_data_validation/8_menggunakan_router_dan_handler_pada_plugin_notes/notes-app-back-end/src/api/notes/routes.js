// const {
//     addNoteHandler,
//     getAllNotesHandler,
//     getNoteByIdHandler,
//     editNoteByIdHandler,
//     deleteNoteByIdHandler,
// } = require('./handler');

const routes = (handler) => [
    {
        method: 'POST',
        pat: '/notes',
        handler: handler.addNoteHandler,
    },
     {
        method: 'GET',
        pat: '/notes',
        handler: handler.getAllNotesHandler,
    },
     {
        method: 'GET',
        pat: '/notes/{id}',
        handler: handler.getNoteByIdHandler,
    },
     {
        method: 'PUT',
        pat: '/notes/{id}',
        handler: handler.editNoteByIdHandler,
    },
     {
        method: 'DELETE',
        pat: '/notes/{id}',
        handler: handler.deleteNoteByIdHandler,
    },
];

module.exports = routes;