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

const employeeSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  companyurl: {
    type: String,
    required: true,
  },
  file: Buffer,
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  agreeToTerms: {
    type: Boolean,
    required: true,
  },
})

module.exports = {
  Candidate: mongoose.model("Candidate", candidateSchema),
  Employee: mongoose.model("Employee", employeeSchema),
}
