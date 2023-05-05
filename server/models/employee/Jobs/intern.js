const mongoose = require("mongoose")

const perksSchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
})

const supplementarySchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
})

const educationSchema = new mongoose.Schema({
  qualification: {
    type: String,
  },
  field: {
    type: [String],
  },
})

const locationSchema = new mongoose.Schema({
  value: {
    type: String,
  },
  label: {
    type: String,
  },
})

const internSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    required: true,
  },
  jobTime: {
    type: String,
    required: true,
  },
  jobType: {
    type: String,
    required: true,
  },
  shift: {
    type: String,
    required: true,
  },
  city: {
    type: [locationSchema],
  },
  duration: {
    type: String,
  },
  checked: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
  },
  skills: {
    type: [String],
    required: true,
  },
  jobDescription: {
    type: String,
    required: true,
  },
  experience: {
    type: {
      years: {
        type: String,
      },
      month: {
        type: String,
      },
    },
  },
  salaryType: {
    type: String,
    required: true,
  },
  salaryRange: {
    type: {
      from: {
        type: Number,
      },
      to: {
        type: Number,
      },
    },
  },
  incentives: {
    type: Boolean,
  },
  incentivesValue: {
    type: String,
  },
  perks: {
    type: [perksSchema],
  },
  supplementary: {
    type: [supplementarySchema],
  },
  education: {
    type: [educationSchema],
  },
  languages: {
    type: [String],
    required: true,
  },
  openings: {
    type: String,
  },
  location: {
    type: [locationSchema],
  },
  time: {
    type: Date,
    default: Date.now(),
  },
  file: {
    type: String,
    required: true,
  },
})

module.exports = mongoose.model("PostedJobs", internSchema)
