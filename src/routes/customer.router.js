import { Router } from 'express'
const router = Router()

import {
  createCustomer,
  getCustomers,
  getCustomerById,
  updateCustomerById,
  deleteCustomerById
} from '../controllers/customer.controller.js'

router.get('/', getCustomers)
router.get('/:userId', getCustomerById)

router.post('/', createCustomer)

router.put('/:userId', updateCustomerById)

router.delete('/:userId', deleteCustomerById)

export default router