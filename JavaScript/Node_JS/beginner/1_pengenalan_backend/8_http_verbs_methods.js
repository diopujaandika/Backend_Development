  /**
   * HTTP Verbs/Methods
   * 1. GET => Mendapatkan Data
   * 2. POST => Mengirimkan Data Baru
   * 3. PUT => Memperbarui Data Yang Ada
   * 4. DELETE => Menghapus Data
   */

  /**
   * HTTP Response Code yang Umum digunakan
   * Status-Line bagian dari HTTP Response untuk mengidentifikasi permintaan client berhasil atau tidak.
   * Status code bernilai 3 digit angka.
   * 1. 200 (OK) => Permintaan client berhasil dijalankan oleh server
   * 2. 201 (Created) => Server berhasil membuat/menambahkan resource yang diminta client
   * 3. 400 (Bad Request) => Permintaan client gagal dijalankan kerena proses validasi input dari client gagal.
   * 4. 401 (Unauthorized) => Permintaan client gagal dijalankan. Biasanya disebabkan kerena pengguna belum melakukan proses autentikasi
   * 5. 403 (Forbidden) => Permintaan client gagal dijalankan karena ia tidak memiliki hak askes ke resource yang diminta
   * 6. 404 (Not Found) => Permintaan client gagal dijalankan karena resource yang diminta tidak ditemukan
   * 7. 500 (Internal Server Error) => Permintaan client gagal dijalankan karena server mengalami error (membangkitkan exceotion)
   * 8. 503 (Service Unavailable) => Permintaan client gagal dijalankan karena server tidak dapat menangani permintaan.
   */