const{nanoid} = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class NotesService{
    constructor(){
        this.notes = [];
    }

    addNotes({title, body, tags}){
        const id = nanoid(16);
        const createAdt = new Date().toISOString();

        const newNote = {
            title, tags, body, id, createAt, updatedAt,
        };

        this.notes.push(newNote);

        const isSuccess = this.notes.filter((note) => note.id).length > 0;

        if(!isSuccess){
            //throw new Error('Catatan gagal ditambahkan!');
            throw new InvariantError('Catatan gagal ditambahkan');
        }

        return id;
    }

    getNotes(){
        return this._notes;
    }

    getNoteById(id){
        const note = this.notes.filter((n) => n.id === id)[0];
        if (!note){
            //throw new Error('Catatan tidak ditemukan');
            throw new NotFoundError('Catatan tidak ditemukan');
        }
        return note;
    }

    editNoteById(id, {title, body, tags}){
        const index = this.notes.findIndex((note) => note.id === id);

        if(index === -1){
            //throw new Error('Gagal memperbarui catatan. Id tidak ditemukan!');
            throw new NotFoundError('Gagal memperbarui catatan. Id tidak ditemukan');
        }

        const updatedAt = new Date().toISOString();

        this._notes[index] = {
            ...this._notes[index],
            title,
            tags,
            body,
            updatedAt,
        };
    }

    deleteNoteById(id){
        const index = this._notes.findIndex((note) => note.id === id);

        if(index === -1){
            //throw new Error('Catatan gagal dihapus. Id tidak ditemukan!');
            throw new NotFoundError('Catatan gagal dihapus. Id tidak ditemukan');
        }

        this._notes.splice(index, 1);
    }
}

module.exports = NotesService;