import bcrypt from 'bcrypt'

import User from '../models/user.model.js'

export const createAdmin = async (req, res) => {
  try {
    const admin = await User.findOne({ email: 'admin@admin.admin' })

    if (!admin) {
      await User.create({
        name: 'admin',
        email: 'admin@admin.admin',
        password: await bcrypt.hashSync('123', 10),
        role: 'admin'
      })
      console.info('Admin created')
    }
  } catch (error) {
    console.error(error)
  }
}

