const ClientError = require('../../exceptions/ClientError');

class NotesHandler{
    constructor(service){
        this._service = service;
        this._validator = this._validator;
        
        this.postNoteHandler = this.postNoteHandler.bind(this);
        this.getNotesHandler = this.getNotesHandler.bind(this);
        this.getNoteByIdHandler = this.getNoteByIdHandler.bind(this);
        this.putNoteByIdHandler = this.putNoteByIdHandler.bind(this);
        this.deleteNoteByIdHandler = this.deleteNoteByIdHandler.bind(this);
    }

    postNoteHandler(request, h) {
        try{
            this._validator.validateNotePayload(request.payload);

            const {title = 'untitled', body, tags} =request.payload;

            this._service.addNote({title, body, tags});

            const noteId = this._service.addNote({title, body, tags})

            const response = h.response({
                status: 'success',
                message: 'catatan berhasil ditambahkan',
                data: {
                    noteId,
                }
            });
            response.code(201);
            return response;
        }catch(error){
            // const response = h.response({
            //     status: 'fail',
            //     message: error.messsage,
            // });
            // response.code(400);
            // return response;
            if (error instanceof ClientError) {
                const response = h.response({
                status: 'fail',
                message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }
              // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    getNotesHandler() {
        const notes = this._service.getNotes();
        return {
            status: 'success',
            data: {
                notes,
            },
        };
    }

    getNoteByIdHandler(request, h) {
        try{
            const {id} = request.params;
            const note = this.service.getNoteByIdHandler(id);
            return{
                status: 'success',
                data: {
                    note,
                }
            }
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                status: 'fail',
                message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }
        
            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    putNoteByIdHandler(request, h) {
        try{
            this._validator.validateNotePayload(request.payload);

            const {id} = request.params;

            this._service.editNoteById(id, request.payload);

            return{
                status: 'success',
                message: 'catatan berhasil diperbarui',
            };
        } catch (error) {
            if (error instanceof ClientError) {
                const response = h.response({
                status: 'fail',
                message: error.message,
                });
                response.code(error.statusCode);
                return response;
            }
        
            // Server ERROR!
            const response = h.response({
                status: 'error',
                message: 'Maaf, terjadi kegagalan pada server kami.',
            });
            response.code(500);
            console.error(error);
            return response;
        }
    }

    deleteNoteByIdHandler(request, h) {
        try{
            const {id} = request.params;

            this.service.deleteNoteById(id);

            return {
                status: 'success',
                message: 'Catatan berhasil dihapus',
            };
        } catch (error) {
      if (error instanceof ClientError) {
        const response = h.response({
          status: 'fail',
          message: error.message,
        });
        response.code(error.statusCode);
        return response;
      }
 
      // Server ERROR!
      const response = h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      });
      response.code(500);
      console.error(error);
      return response;
    }
  }
}

module.exports = NotesHandler;