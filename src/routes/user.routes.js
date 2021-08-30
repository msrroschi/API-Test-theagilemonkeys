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

router.get('/', getUsers)
router.get('/:userId', getUserById)

router.post('/', createUser)

router.put('/:userId', updateUser)
router.put('/role/:userId', updateUserRole)

router.delete('/:userId', deleteUser)

export default router