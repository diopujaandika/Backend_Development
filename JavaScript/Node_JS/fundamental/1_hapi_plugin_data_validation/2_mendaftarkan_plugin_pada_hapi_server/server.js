const notesPlugin = require('./notesPlugin')
const otherPlugin = require('./otherPlugin')
const Hapi = require('@hapi/hapi')

const init = async () => {
    const server = Hapi.server()

    //Registrasi satu plugin menggunakan await server.register()
    // await server.register({
    //     plugin: notesPlugin,
    //     options: {notes:[]}
    // })
    // await server.start()

    //Registrasi satu plugin menggunakan await server.register()
    await server.register([
        {
            plugin: notesPlugin,
            options: {notes:[]}
        },
        {
            plugin: otherPlugin,
            options: {/**Berikan nilai opstions jika dibutuhkan */}
        }
    ])
    await server.start()
}

init()