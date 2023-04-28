const mongoose = require("mongoose")

const Candidate = require("../account")

const projectDetailsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
})

const trainingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
})

const achievementSchema = new mongoose.Schema({
  achievement: {
    type: String,
    required: true,
  },
})

const degreeSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: true,
  },
  field: {
    type: String,
  },
  institute: {
    type: String,
  },
  city: {
    type: String,
  },
  schoolName: {
    type: String,
  },
  startDate: {
    type: Date,
  },
  endDate: {
    type: Date,
  },
  present: {
    type: Boolean,
    default: false,
  },
  yearOfCompletion: {
    type: Date,
  },
})

const FresherApplicationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Candidate,
    required: true,
  },
  username: {
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
  skills: {
    type: [String],
    required: true,
  },
  salaryType: {
    type: String,
    required: true,
  },
  salaryRange: {
    type: {
      from: String,
      to: String,
    },
  },
  coverLetter: {
    type: String,
  },
  degree: {
    type: [degreeSchema],
  },
  projectDetails: {
    type: [projectDetailsSchema],
  },
  training: {
    type: [trainingSchema],
  },
  trainingFiles: [
    {
      fieldname: String,
      originalname: String,
      encoding: String,
      mimetype: String,
      destination: String,
      filename: String,
      path: String,
      size: Number,
    },
  ],
  achievements: {
    type: [achievementSchema],
  },
  achievementsFiles: [
    {
      fieldname: String,
      originalname: String,
      encoding: String,
      mimetype: String,
      destination: String,
      filename: String,
      path: String,
      size: Number,
    },
  ],
  preferredLocation: {
    type: [String],
  },
  languages: {
    type: [String],
    required: true,
  },
  availability: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model("FresherApplicaton", FresherApplicationSchema)
