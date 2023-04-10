const mongoose = require("mongoose")

const Schema = mongoose.Schema

const candidateSchema = new Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  emailid: {
    type: String,
    required: true,
  },
  mobilenumber: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  file: {
    data: Buffer,
    required: true,
  },
  agreeToTerms: {
    type: Boolean,
    required: true,
  },
  graduation: {
    degree: {
      type: String,
      required: true,
    },
    fieldOfStudy: {
      type: String,
      required: true,
    },
    collegeOrUniversity: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    from: {
      type: Date,
      required: true,
    },
    to: {
      type: Date,
      required: true,
    },
    currentlyGoingHere: {
      type: Boolean,
      required: true,
      default: false,
    },
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
  file: {
    data: Buffer,
    required: true,
  },
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
