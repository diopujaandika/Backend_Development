const { Pool } = require('pg');
const { nanoid } = require('nanoid');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class SongsService {
  constructor() {
    this._pool = new Pool();
  }

  async getSongs({ title, performer }) {
    let query = `
      SELECT id, title, performer FROM songs
      WHERE title ILIKE $1 AND performer ILIKE $2
    `;

    const values = [`%${title}%`, `%${performer}%`];

    const result = await this._pool.query(query, values);
    return result.rows;
  }

  async addSong({ title, year, genre, performer, duration, albumId }) {
    const id = `song-${nanoid(16)}`;
    const query = {
      text: `INSERT INTO songs (id, title, year, genre, performer, duration, album_id)
             VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`,
      values: [id, title, year, genre, performer, duration, albumId],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) throw new InvariantError('Lagu gagal ditambahkan');
    return result.rows[0].id;
  }

  async getSongs({ title, performer }) {
    let baseQuery = 'SELECT id, title, performer FROM songs';
    const values = [];
    const filters = [];

    if (title) {
      filters.push(`LOWER(title) LIKE LOWER($${values.length + 1})`);
      values.push(`%${title}%`);
    }

    if (performer) {
      filters.push(`LOWER(performer) LIKE LOWER($${values.length + 1})`);
      values.push(`%${performer}%`);
    }

    if (filters.length > 0) baseQuery += ` WHERE ${filters.join(' AND ')}`;

    const result = await this._pool.query({ text: baseQuery, values });
    return result.rows;
  }

  async getSongById(id) {
    const query = {
      text: 'SELECT * FROM songs WHERE id = $1',
      values: [id],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) throw new NotFoundError('Lagu tidak ditemukan');

    return result.rows[0];
  }

  async getSongsByAlbumId(albumId) {
  const query = {
    text: 'SELECT id, title, performer FROM songs WHERE album_id = $1',
    values: [albumId],
  };

  const result = await this._pool.query(query);
  return result.rows;
}

  async editSongById(id, { title, year, genre, performer, duration, albumId }) {
    const query = {
      text: `UPDATE songs SET title = $1, year = $2, genre = $3, performer = $4,
             duration = $5, album_id = $6 WHERE id = $7 RETURNING id`,
      values: [title, year, genre, performer, duration, albumId, id],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) throw new NotFoundError('Gagal memperbarui lagu. Id tidak ditemukan');
  }

  async deleteSongById(id) {
    const query = {
      text: 'DELETE FROM songs WHERE id = $1 RETURNING id',
      values: [id],
    };

    const result = await this._pool.query(query);
    if (!result.rowCount) throw new NotFoundError('Lagu gagal dihapus. Id tidak ditemukan');
  }
}

module.exports = SongsService;
