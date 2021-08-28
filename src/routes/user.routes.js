import { Router } from 'express'
const router = Router()

import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  updateUserRole,
  deleteUser
} from '../controllers/user.controller.js'

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:userId', getUserById)
router.put('/:userId', updateUser)
router.put('/role/:userId', updateUserRole)
router.delete('/:userId', deleteUser)

export default router