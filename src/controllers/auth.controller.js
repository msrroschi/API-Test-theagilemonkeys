import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import config from '../config.js'
import User from '../models/users.model.js'

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
  
    const user = await User.findOne({ email })

    if (!user) res.status(400).send('Credentials are incorrect')
    if (!bcrypt.compareSync(password, user.password))
      res.status(400).send('Credentials are incorrect')

    const token = jwt.sign({ id: user._id }, config.SECRET, {
      expiresIn: '24h'
    })

    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json(error)
  }
}

export const whoami = (req, res) => {
  res.status(200).json(res.locals.user)
}