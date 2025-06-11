const {
    addNoteHandler,
    getAllNotesHandler,
    getNoteByIdHandler,
    editNoteByIdHandler,
    deleteNoteByIdHandler,
} = require('./handler');

const routes = [
    {
        method: 'POST',
        pat: '/notes',
        handler: addNoteHandler,
    },
     {
        method: 'GET',
        pat: '/notes',
        handler: getAllNotesHandler,
    },
     {
        method: 'GET',
        pat: '/notes/{id}',
        handler: getNoteByIdHandler,
    },
     {
        method: 'PUT',
        pat: '/notes/{id}',
        handler: editNoteByIdHandler,
    },
     {
        method: 'DELETE',
        pat: '/notes/{id}',
        handler: addNoteByIdHandler,
    },
];

module.exports = routes;