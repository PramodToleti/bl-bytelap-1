const express = require("express")
const router = express.Router()
const multer = require("multer")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const upload = multer({ dest: "uploads/" })

const Employee = require("../../models/employee/account")
const PostedJobs = require("../../models/employee/Jobs/intern")

//Create Account
router.post("/create-account", upload.single("file"), async (req, res) => {
  const employeeDetails = req.body

  try {
    const isPresent = await Employee.findOne({
      officialEmail: employeeDetails.officialEmail,
    })

    if (isPresent) {
      res.status(400).json({ message: "User already exists" })
    } else {
      //Creating Document in MongoDB
      const hashedPassword = await bcrypt.hash(employeeDetails.password, 10)
      const employee = new Employee({
        companyName: employeeDetails.companyName,
        officialEmail: employeeDetails.officialEmail,
        firstName: employeeDetails.firstName,
        lastName: employeeDetails.lastName,
        role: employeeDetails.role,
        companyWebsite: employeeDetails.companyWebsite,
        companyAddress: employeeDetails.companyAddress,
        password: hashedPassword,
        agreeToTerms: JSON.parse(employeeDetails.agreeToTerms),
        file: req.file,
      })
      await employee.save()
      //Generate JWT Token
      const payload = { id: employee._id, email: employee.officialEmail }
      const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "4d",
      })

      res
        .status(200)
        .json({ message: "Account created successfully", jwtToken })
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

//Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body

  try {
    const employee = await Employee.findOne({
      officialEmail: email,
    })

    if (employee) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        employee.password
      )

      if (isPasswordCorrect) {
        const payload = { id: employee._id, email: employee.officialEmail }
        const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "4d",
        })
        res.status(200).json({ message: "Login successful", jwtToken })
      } else {
        res.status(400).json({ message: "Invalid credentials" })
      }
    } else {
      res.status(400).json({ message: "User doesn't exist" })
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

//Job Post
router.post("/job/internship", async (req, res) => {
  const jobDetails = req.body
  try {
    const jobPost = new PostedJobs({
      type: "Internship",
      jobTitle: jobDetails.jobTitle,
      jobTime: jobDetails.jobTime,
      jobType: jobDetails.jobType,
      city: jobDetails.city,
      shift: jobDetails.shift,
      skills: jobDetails.skills,
      jobDescription: jobDetails.jobDescription,
      salaryType: jobDetails.salaryType,
      salaryRange: jobDetails.salaryRange,
      incentives: jobDetails.incentives,
      incentivesValue: jobDetails.incentivesValue,
      perks: jobDetails.perks,
      languages: jobDetails.languages,
      openings: jobDetails.openings,
      education: jobDetails.education,
      location: jobDetails.location,
      time: jobDetails.time,
    })
    await jobPost.save()
    res.status(200).json({ message: "Job posted successfully" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/job/fresher", async (req, res) => {
  const jobDetails = req.body
  try {
    const jobPost = new PostedJobs({
      type: "Fresher",
      jobTitle: jobDetails.jobTitle,
      jobTime: jobDetails.jobTime,
      jobType: jobDetails.jobType,
      city: jobDetails.city,
      shift: jobDetails.shift,
      skills: jobDetails.skills,
      jobDescription: jobDetails.jobDescription,
      salaryType: jobDetails.salaryType,
      salaryRange: jobDetails.salaryRange,
      incentives: jobDetails.incentives,
      incentivesValue: jobDetails.incentivesValue,
      supplementary: jobDetails.supplementary,
      education: jobDetails.education,
      perks: jobDetails.perks,
      languages: jobDetails.languages,
      openings: jobDetails.openings,
      location: jobDetails.location,
      time: jobDetails.time,
    })
    await jobPost.save()
    res.status(200).json({ message: "Job posted successfully" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/job/experience", async (req, res) => {
  const jobDetails = req.body
  try {
    const jobPost = new PostedJobs({
      type: "Experience",
      jobTitle: jobDetails.jobTitle,
      jobTime: jobDetails.jobTime,
      jobType: jobDetails.jobType,
      city: jobDetails.city,
      shift: jobDetails.shift,
      skills: jobDetails.skills,
      jobDescription: jobDetails.jobDescription,
      salaryType: jobDetails.salaryType,
      salaryRange: jobDetails.salaryRange,
      incentives: jobDetails.incentives,
      incentivesValue: jobDetails.incentivesValue,
      experience: jobDetails.experience,
      supplementary: jobDetails.supplementary,
      perks: jobDetails.perks,
      languages: jobDetails.languages,
      openings: jobDetails.openings,
      location: jobDetails.location,
      education: jobDetails.education,
      time: jobDetails.time,
    })
    await jobPost.save()
    res.status(200).json({ message: "Job posted successfully" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

module.exports = router
