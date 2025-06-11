const notesPlugin = {
    name: 'notes',
    version: '1.0.0',
    register: async (server, options) => {  //Membuat Plugin Hapi => register: () => {}
        const notes = options.notes;        //Menetapkan routing untuk /notes
        server.route([
            {
                method: 'GET',
                path: './notes',
                handler: () => {
                    return notes;
                }
            }
        ]) 
    },
}