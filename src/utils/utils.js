import jwt from 'jsonwebtoken'

import config from '../config.js'
import User from '../models/user.model.js'

import fs from 'fs'

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

export const deleteDuplicatedPhoto = (customer) => {
  fs.readdir('./public/customers', (err, files) => {

    // Index of the curent customer photo
    let customerPhoto = customer.photo.split('/')[5]
    let customerPhotoIdx = files.indexOf(customerPhoto)

    files.forEach((file, idx) => {

      // Check for duplicates
      if (
        file.split('-')[1] === customer._id.toString() &&
        idx !== customerPhotoIdx
      ) {
        fs.rm('./public/customers/' + file, (err) => {
          if(err){
            console.error(err.message)
            return
          }
        })
        return
      }
    })
  })
}

export const deleteOldPhoto = (customer) => {
  fs.readdir('./public/customers', (err, files) => {

    files.forEach((file, idx) => {
      if (file.split('-')[1] === customer._id.toString()) {
        fs.rm('./public/customers/' + file, (err) => {
          if(err){
            console.error(err.message)
            return
          }
        })
        return
      }
    })
  })
}