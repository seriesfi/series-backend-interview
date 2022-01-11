import express from 'express'

import router from './router'

const onServerStarted = () => {
    console.log('Server listening on port: 3000')
}

const app = express()
app.use(router)
const PORT = process.env.PORT || 3000
app.listen(PORT, onServerStarted)