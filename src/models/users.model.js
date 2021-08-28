import mongoose from 'mongoose'
import { hashSync } from 'bcrypt'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'There is already a user with this email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },
  name: {
    type: String,
    minlength: 2,
    maxlength: 15
  },
  surname: {
    type: String,
    minlength: 2,
    maxlength: 15
  },
})

userSchema.pre('save', function (next) {
  console.log('hola')
  try {
    const user = this
    console.log('pasword modified?', user.isModified('password'))
    if (!user.isModified('password')) return next()

    user.password = hashSync(user.password, 10)
    return next()
  } catch (error) {
    return next(error)
  }
})

export default mongoose.model('user', userSchema)