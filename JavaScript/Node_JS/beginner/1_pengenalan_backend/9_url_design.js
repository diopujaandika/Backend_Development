/**
 * URL DESIGN
 * 
 * 3 Hal yang harus diperhatikan ketika membangun REST API
 * 1. URL
 * 2. Path
 * 3. Endpoint 
 */

//Standar merancang Endpoint
/**
 * 1. Gunakan kata benda daripada kata kerja pada endpoint path. Contoh: /getArticles atau addArticles
 * 2. Gunakan kata jamak pada Endpoint untuk resource collection. Gunakan path parameter untuk mendapatkan artikel spesifik. Contoh: /articles/:id
 * 3. Gunakan endpoint berantai untuk resource yang memiliki hirarki/relasi. Contooh: GET/articles/:id/comments
 */