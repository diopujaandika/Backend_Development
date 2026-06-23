import {nanoid} from 'nanoid';
import notes from '../src/notes.js';

//Controller membuat catatan
export const createNote = (req, res, next) => {

    //Logika menyimpan catatan dari clien ke dalam array
    //Clien mengirim data catatan berupa (title, tags, dan body)
    const {title = 'untitled', tags, body} = req.body;

    //Untuk properti id yang merupakan string dan unik, kita menggunakan labrary nanoid => npm install nanoid
    const id = nanoid(16);

    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    //Masukan nilai-nilai tersebut ke dalam array notes menggunakn method push()
    const newNote = {title, tags, body, id, createdAt, updatedAt};
    notes.push(newNote);

    //Untuk menentukan apakah newNote sudah atau belum masuk ke dalam array notes gunakan method filter() berdasarkan id catatan
    const isSuccess = notes.filter((note) => note.id === id).length > 0;

    //Kita gunakan isSuccess untuk menentukan respons jika True dan False
    if(isSuccess){
        return res.status(201).json({
           status: 'success',
           message: 'Catatan berhasil ditambahkan!',
           data: {noteId: id} 
        });
    }
    return res.status(500).json({
        status: 'fail',
        message: 'Catatan gagal ditambahkan!' 
    });
};

//Controller untuk menampilkan seluruh catatan
export const getNotes = (req, res) => {
    return res.json({
        status: 'success',
        data: {notes}
    });
};

//Controller untuk menampilkan isi dari suatu catatan berdasarkan id yang dimiliki
export const getNoteById = (req, res) => {

     //Mendapatkan nilai id
    const {id} = req.params;  
    
    //Mendapatkan objek note dengan id menggunakan method array find()
    const note = notes.find((n) => n.id === id) 

    //Kondisi untuk memastikan objek note tidak bernilai undifined
    if(note) {
        return res.json({
            status: 'success',
            data: {note}
        });
    }
    return res.status(404).json({
        status: 'fail',
        message: 'Catatan tidak ditemukan!'
    });
};

//Controller mengedit catatan
export const editNoteById = (req, res) => {

    //Mengedit sesuai dengan id
    const {id} = req.params;

    //Mendatapkan data notes terbaru yang dikirimkan melalui body request
    const {title, tags, body} = req.body;

    //Mempebarui nilai properti updatedAt dan mendapatkan nilai terbaru dengan new Date().toISOString()
    const updatedAt = new Date().toISOString()

    //Mencari note dengan id 
    const index = notes.findIndex((n) => n.id === id);

    //Kondisi bila index ditemukan dan tidak ditemukan
    if (index !== -1) {
        notes[index] = {...notes[index], title, tags, body, updatedAt};
        return res.json({
            status: 'success',
            message: 'Catatan berhasil diperbarui!'
        });
    }
    return res.status(404).json({
        status: 'fail',
        message: 'Gagal memperbarui catatan, Id tidak ditemukan!'
    });
};