const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class NotesService{
    constructor(){
        this._notes = []
    }

    //CRUD Functions
    addNote({title, body, tags}){
        const id = nanoid(16);
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        const newNote = {
            title, tags, body, id, createdAt, updatedAt,
        };

        this._notes.push(newNote);

        const isSuccess = this.notes.filter((note) => note.id === id).length > 0;

        if(!isSuccess){
            //throw new Error('Catatan gagal ditambahkan');
            throw new InvariantError('Catatan gagal ditambahkan');
        }

        return id;
    }

    //GetNotes untuk membaca seluruh Note yang di simpan
    getNotes(){
        return this._notes;
    }

    //GetNoteById untuk membaca note yang disimpan berdasarkan id
    getNoteById(id){
        const note = this._notes.filter((n) => n.id === id)[0];
        if(!note){
            //throw new Error('Catatan tidak ditemukan');
            throw new NotFoundError('Catatan tidak ditemukan');
        }
        return note;
    }

    //EditNoteById untuk mengubah data catatan yang disimpan
    editNoteById(id, {title, bodu, tags}){
        const index = this._notes.findIndex((note) => note.id === id);

        if(index === -1){
           //throw new Error('Gagal memperbarui catatan. Id tidak ditemukan');
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

    //DeleteNoteById untuk menghapus note yang disimpan berdasarkan id
    deleteNotedById(id){
        const index = this._notes.findIndex((note) => note.id === id);

        if (index === -1){
            //throw new Error ('Catatan gagal dihapus. Id tidak ditemukan')
            throw new NotFoundError('Catatan gagal dihapus. Id tidak ditemukan');
        }

        this._notes.splice(index, 1)
    }
}

module.exports = NotesService;