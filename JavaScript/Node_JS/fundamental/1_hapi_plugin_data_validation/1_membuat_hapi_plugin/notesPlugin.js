const { version } = require("react")

const notesPlugin = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, options) => {
        //Contoh menetapkan routing untuk /notes
        const notes = options.notes
        server.route([
            {
                method: 'GET',
                path: './notes',
                handler: () => {
                    return notes
                }
            }
        ])
    }
}