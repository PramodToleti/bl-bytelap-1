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

const locationSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const historySchema = new mongoose.Schema({
  profile: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: {
    type: String,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
  present: {
    type: Boolean,
  },
  responsibilities: {
    type: String,
    required: true,
  },
  hidden: {
    type: Boolean,
  },
})

const ExperienceApplicationSchema = new mongoose.Schema({
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
  experience: {
    type: {
      years: String,
      months: String,
    },
    required: true,
  },
  ctc: {
    type: {
      lacs: String,
      thousand: String,
    },
  },
  coverLetter: {
    type: String,
  },
  degree: {
    type: [degreeSchema],
  },
  employementHistory: {
    type: [
      {
        type: historySchema,
      },
    ],
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
    type: [locationSchema],
  },
  languages: {
    type: [String],
    required: true,
  },
  availability: {
    type: String,
  },
  time: {
    type: Date,
    required: true,
  },
})

module.exports = mongoose.model(
  "ExperienceApplicaton",
  ExperienceApplicationSchema
)
