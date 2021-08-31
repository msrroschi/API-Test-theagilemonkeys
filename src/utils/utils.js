import jwt from 'jsonwebtoken'

import config from '../config.js'
import User from '../models/user.model.js'

export const verifyToken = (req, res, next) => {
  const token = req.headers.token
  if (!token) return res.status(403).json({ message: 'No token provided' })

  try {
    jwt.verify(token, config.SECRET, async (err, token) => {
      if (err) res.status(403).send('Token not valid')

      res.locals.user = await User.findById(token.id)
      next()
    })
  } catch (error) {
    res.status(401).send('Unauthorized')
  }
}

export const checkRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(res.locals.user.role)) return res.status(401).send('Unauthorized')
    next()
  }
}