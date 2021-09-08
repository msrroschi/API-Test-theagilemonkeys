import { Router } from 'express'
const router = Router()

import { uploadUserPhoto } from '../utils/multer.js'

import {
  verifyToken
} from '../utils/utils.js'

import {
  createCustomer,
  getCustomers,
  getCustomerById,
  getCustomerPhoto,
  updateCustomerById,
  deleteCustomerById
} from '../controllers/customer.controller.js'

router.get('/', verifyToken, getCustomers)
router.get('/:userId', verifyToken, getCustomerById)
router.get('/:photoFileName/photo', getCustomerPhoto)

router.post('/', verifyToken, createCustomer)

router.put('/:userId', verifyToken, uploadUserPhoto, updateCustomerById)

router.delete('/:userId', verifyToken, deleteCustomerById)

export default router