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

// Exception global
const ClientError = require('./exceptions/ClientError');

const init = async () => {
  const albumsService = new AlbumsService();
  const songsService = new SongsService();

  const server = Hapi.server({
    port: process.env.PORT || 5000,
    host: process.env.HOST || 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  // Registrasi plugin albums dengan menambahkan songsService
  await server.register({
    plugin: albums,
    options: {
      service: albumsService,
      validator: AlbumsValidator,
      songsService: songsService,  // <-- Tambahan penting untuk opsional 1
    },
  });

  // Registrasi plugin songs
  await server.register({
    plugin: songs,
    options: {
      service: songsService,
      validator: SongsValidator,
    },
  });

  // Penanganan error global
  server.ext('onPreResponse', (request, h) => {
    const { response } = request;

    if (response instanceof ClientError) {
      return h.response({
        status: 'fail',
        message: response.message,
      }).code(response.statusCode);
    }

    if (response instanceof Error) {
      console.error(response); // log internal server error
      return h.response({
        status: 'error',
        message: 'Maaf, terjadi kegagalan pada server kami.',
      }).code(500);
    }

    return h.continue;
  });

  await server.start();
  console.log(`🚀 Server berjalan pada ${server.info.uri}`);
};

// Tangkap unhandled promise rejection
process.on('unhandledRejection', (err) => {
  console.error(err);
  process.exit(1);
});

init();
