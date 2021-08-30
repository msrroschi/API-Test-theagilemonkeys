import { Router } from 'express'
const router = Router()

import {
  verifyToken
} from '../utils/utils.js'

import {
  login,
  whoami
} from '../controllers/auth.controller.js'

router.post('/login', login)
router.get('/whoami', verifyToken, whoami)

export default router