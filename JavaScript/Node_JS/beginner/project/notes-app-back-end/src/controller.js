import {nanoid} from 'nanoid';
import notes from '../src/notes.js';

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