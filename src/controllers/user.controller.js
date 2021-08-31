import User from '../models/user.model.js'

export const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body)
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUsers = async (req, res) => {
  try {
    const users = await User.find()
    res.status(200).json(users)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    res.status(200).json(user)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    
    Object.keys(req.body).forEach(key => {
      user[key] = req.body[key]
    })

    const userSaved = await user.save()
    res.status(200).json(userSaved)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const updateUserRole = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId)
    user.role = req.body.role

    const savedUser = await user.save()
    res.status(200).json(savedUser)
  } catch (error) {
    res.status(500).json(error)
  }
}

export const deleteUser = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.userId)
    res.status(200).send(`${deletedUser.name} ${deletedUser.surname} has been deleted`)
  } catch (error) {
    res.status(500).json(error)
  }
}