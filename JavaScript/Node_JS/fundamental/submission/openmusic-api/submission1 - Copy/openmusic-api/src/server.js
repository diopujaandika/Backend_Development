require('dotenv').config();

const Hapi = require('@hapi/hapi');

// Plugin dan dependensi album
const albums = require('./api/albums');
const AlbumsService = require('./services/postgres/AlbumsService');
const AlbumsValidator = require('./validator/albums');

// Plugin dan dependensi lagu
const songs = require('./api/songs');
const SongsService = require('./services/postgres/SongsService');
const SongsValidator = require('./validator/songs');

// ClientError
const ClientError = require('./exceptions/ClientError');

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();

   const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  await server.register([
    {
      plugin: albums,
      options: {
        service: albumsService,
        validator: AlbumsValidator,
      },
    },
    {
      plugin: songs,
      options: {
        service: songsService,
        validator: SongsValidator,
      },
    },
  ]);

  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof ClientError) {
      const newResponse = h.response({
        status: 'fail',
        message: response.message,
      });
      newResponse.code(response.statusCode);
      return newResponse;
    }

    if (response.isBoom) {
      const newResponse = h.response({
        status: 'error',
        message: 'Terjadi kesalahan pada server',
      });
      newResponse.code(500);
      console.error(response);
      return newResponse;
    }

    return h.continue;
});


  await server.start();
  console.log(`🚀 Server berjalan pada ${server.info.uri}`);
};

init();
