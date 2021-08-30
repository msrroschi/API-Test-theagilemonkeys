import mongoose from 'mongoose'

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    minLength: 2,
    maxLength: 15,
    required: [true, 'Name is required']
  },
  surname: {
    type: String,
    minLength: 2,
    maxLength: 15,
    required: [true, 'Surname is required']
  },
  photo: {
    type: String
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: []
  },
  lastModifiedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  }
})

customerSchema.virtual('fullName').get(function () {
  return `${this.name} ${this.surname}`
})

export default mongoose.model('customer', customerSchema)