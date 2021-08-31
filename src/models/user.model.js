import mongoose from 'mongoose'
import { hashSync } from 'bcrypt'

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'There is already a user with this email'],
    validate: {
      validator: function (v) {
        return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(
          v
        )
      },
      message: (email) => `${email.value} is not a valid email!`,
    },
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    //Minimum eight characters, at least one upper case English letter, one lower case English letter, one number and one special character
    validate: {
      validator: function (v) {
        return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/i.test(
          v
        )
      },
      message: (password) => `${password.value} is not a valid password!`,
    },
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
    if (!user.isModified('password')) return next()

    user.password = hashSync(user.password, 10)
    return next()
  } catch (error) {
    return next(error)
  }
})

export default mongoose.model('user', userSchema)