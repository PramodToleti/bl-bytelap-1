const mongoose = require("mongoose")

const Schema = mongoose.Schema

const employeeSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  officialEmail: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  companyWebsite: {
    type: String,
    required: true,
  },
  aboutCompany: {
    type: String,
    required: true,
  },
  companyAddress: {
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

module.exports = mongoose.model("Employee", employeeSchema)
