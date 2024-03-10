import { envs }  from './config/env.js'
import { startServer }  from './server/server.js'

// Función agnostica autoconvocada (no tiene nombre y se ejecuta sola)

const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


(async() => {
    main()
})()