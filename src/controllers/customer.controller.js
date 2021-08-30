import Customer from '../models/customer.model.js'

export const createCustomer = async (req, res) => {
  try {
    const customer = await Customer.create({
      ...req.body,
      createdBy: res.locals.user._id
    })
    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getCustomers = async (req, res) => {
  try {
    const customers = await Customer.find()
    res.status(200).json(customers)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findById(req.params.userId)
    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndUpdate(
      req.params.userId,
      { ...req.body, lastModifiedBy: res.locals.user._id },
      { new: true }
    )
    res.status(200).json(customer)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteCustomerById = async (req, res) => {
  try {
    const customer = await Customer.findByIdAndDelete(req.params.userId)
    res.status(200).send(`${customer.fullName} has been deleted from the database`)
  } catch (error) {
    res.status(500).json(error)
  }
}