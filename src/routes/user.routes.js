import { Router } from 'express'
const router = Router()

import {
  verifyToken,
  checkRole
} from '../utils/utils.js'

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserRole,
  deleteUser
} from '../controllers/user.controller.js'

router.get('/', verifyToken, checkRole(['admin']), getUsers)
router.get('/:userId', verifyToken, checkRole(['admin']), getUserById)

router.post('/', verifyToken, checkRole(['admin']), createUser)

router.put('/:userId', verifyToken, checkRole(['admin']), updateUser)
router.put('/role/:userId', verifyToken, checkRole(['admin']), updateUserRole)

router.delete('/:userId', verifyToken, checkRole(['admin']), deleteUser)

export default router