const mongoose = require("mongoose")

const Schema = mongoose.Schema

const candidateSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobileNumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  agreeToTerms: {
    type: Boolean,
    required: true,
  },
  graduation: {
    degree: { type: String, required: true },
    field: { type: String, required: true },
    college: { type: String, required: true },
    city: { type: String, required: true },
    from: { type: String, required: true },
    to: { type: String, required: true },
    currentGoHere: { type: Boolean, required: true },
  },
  file: {
    fieldname: String,
    originalname: String,
    encoding: String,
    mimetype: String,
    destination: String,
    filename: String,
    path: String,
    size: Number,
  },
})

module.exports = mongoose.model("Candidate", candidateSchema)
