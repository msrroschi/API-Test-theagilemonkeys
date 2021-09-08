import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import helmet from 'helmet'

import { createAdmin, createFolders } from './utils/initialSetUp.js'

import api from './routes/router.js'

const app = express()
createAdmin()
createFolders()

app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(cors())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.json())

// API
app.use('/api', api)

export default app