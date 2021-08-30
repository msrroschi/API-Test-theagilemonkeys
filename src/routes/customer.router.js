import { Router } from 'express'
const router = Router()

import {
  verifyToken
} from '../utils/utils.js'

import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById
} from '../controllers/customer.controller.js'

router.get('/', verifyToken, getCustomers)
router.get('/:userId', verifyToken, getCustomerById)

router.post('/', verifyToken, createCustomer)

router.put('/:userId', verifyToken, updateCustomerById)

router.delete('/:userId', verifyToken, deleteCustomerById)

export default router