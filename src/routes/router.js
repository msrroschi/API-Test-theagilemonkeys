import { Router } from 'express'

import usersRouter from './user.routes.js'
import authRouter from './auth.router.js'
import customerRouter from './customer.router.js'

const router = Router()

router.use('/users', usersRouter)
router.use('/auth', authRouter)
router.use('/customers', customerRouter)

export default router