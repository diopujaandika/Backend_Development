const Joi = require('joi');
const { NotePayloadSchema } = require('../../../../../latihan_note_api/src/validator/notes/schema');

const NootePayloadSchema = Joi.object({
    title: Joi.string().required(),
    body: Joi.string().required(),
    tags:Joi.array().items(Joi.string().required)
});

module.exports = {NotePayloadSchema};