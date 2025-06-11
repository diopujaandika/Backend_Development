/**
 * MENDAFTARKAN PLUGIN PADA HAPI SERVER
 */

module.exports = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, options) => {
        const notes = options.notes;
        server.route([
            {
                mothod: 'GET',
                path: './notes',
                handler: () => {
                    return notes;
                }
            }
        ])
    }
}