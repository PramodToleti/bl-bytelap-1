const mongoose = require("mongoose")

const Candidate = require("./account")

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
  degree: {
    type: String,
    required: true,
  },
  field: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  institute: {
    type: String,
    required: true,
  },
  present: {
    type: Boolean,
    default: false,
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
  file: {
    data: Buffer,
    contentType: String,
  },
})

const jobApplicationSchema = new mongoose.Schema({
  candidate: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Candidate,
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
  training: {
    type: [trainingSchema],
  },
  availability: {
    type: String,
  },
  coverLetter: {
    type: String,
  },
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
  present: {
    type: Boolean,
    default: false,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
  },
})

module.exports = mongoose.model("JobApplication", jobApplicationSchema)
