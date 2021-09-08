import fs from 'fs'

import User from '../models/user.model.js'

export const createAdmin = async (req, res) => {
  try {
    const admin = await User.findOne({ email: 'admin@admin.admin' })

    if (!admin) {
      await User.create({
        name: 'admin',
        email: 'admin@admin.admin',
        password: 'Admin-123',
        role: 'admin'
      })
      console.info('Admin created')
    }
  } catch (error) {
    console.error(error)
  }
}

export const createFolders = () => {
  try {
    if (fs.existsSync('./public/customers')) {
      return
    } else {
      fs.mkdir('./public', (err) => {
        if (err) console.error(err)
        else {
          fs.mkdir('./public/customers', (err) => {
            if (err) console.error(err)
            console.info('📁 Folder structure prepared!!')
          })
        }
      })
    }
  } catch (error) {
    console.error(error)
  }
}