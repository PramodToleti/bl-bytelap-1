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
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  schoolName: {
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
    default: false,
  },
  yearOfCompletion: {
    type: Date,
  },
})

const InternApplicationSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Candidate,
    required: true,
  },
  jobId: {
    type: String,
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
  jobType: {
    type: String,
    required: true,
  },
  jobTime: {
    type: String,
    required: true,
  },
  languages: {
    type: [String],
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  projectDetails: {
    type: [projectDetailsSchema],
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
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
  availability: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
  degree: {
    type: [degreeSchema],
  },
})

module.exports = mongoose.model("InternJob", InternApplicationSchema)
