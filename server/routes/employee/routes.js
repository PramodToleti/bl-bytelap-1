const express = require("express")
const router = express.Router()
const multer = require("multer")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const upload = multer({ dest: "uploads/" })

const Employee = require("../../models/employee/account")
const PostedJobs = require("../../models/employee/Jobs/intern")
const InternApplication = require("../../models/candidate/Registration/internship")
const FresherApplication = require("../../models/candidate/Registration/fresher")
const ExperienceApplication = require("../../models/candidate/Registration/experience")
//Dashboard
const InternDashboard = require("../../models/employee/Dashboard/internship")
const FresherDashboard = require("../../models/employee/Dashboard/fresher")
const ExperienceDashboard = require("../../models/employee/Dashboard/experience")
const InternJob = require("../../models/candidate/Applications/internship")
const FresherJob = require("../../models/candidate/Applications/fresher")
const ExperienceJob = require("../../models/candidate/Applications/experience")

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
        aboutCompany: employeeDetails.aboutCompany,
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

      res.status(200).json({
        message: "Account created successfully",
        jwtToken,
        userId: employee._id,
      })
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
        res
          .status(200)
          .json({ message: "Login successful", jwtToken, userId: employee._id })
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
    const companyDetails = await Employee.findById(jobDetails.userId)

    console.log(
      req.protocol + "://" + req.get("host") + "/" + companyDetails.file.path
    )

    const jobPost = new PostedJobs({
      type: "Internship",
      userId: jobDetails.userId,
      jobTitle: jobDetails.jobTitle,
      jobTime: jobDetails.jobTime,
      jobType: jobDetails.jobType,
      duration: jobDetails.duration,
      city: jobDetails.city,
      shift: jobDetails.shift,
      skills: jobDetails.skills,
      checked: jobDetails.checked,
      startDate: jobDetails.startDate,
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
      file: (
        req.protocol +
        "://" +
        req.get("host") +
        "/" +
        companyDetails.file.path
      ).toString(),
      companyName: companyDetails.companyName,
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
    const companyDetails = await Employee.findById(jobDetails.userId)

    const jobPost = new PostedJobs({
      type: "Fresher",
      userId: jobDetails.userId,
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
      file: (
        req.protocol +
        "://" +
        req.get("host") +
        "/" +
        companyDetails.file.path
      ).toString(),
      companyName: companyDetails.companyName,
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
  const companyDetails = await Employee.findById(jobDetails.userId)

  try {
    const jobPost = new PostedJobs({
      type: "Experience",
      userId: jobDetails.userId,
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
      file: (
        req.protocol +
        "://" +
        req.get("host") +
        "/" +
        companyDetails.file.path
      ).toString(),
      companyName: companyDetails.companyName,
    })
    await jobPost.save()
    res.status(200).json({ message: "Job posted successfully" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

// @route   POST /employee.my-info
// @desc Get employee info
// @dccess Private

const auth = require("../../middleware/auth")

router.post("/my-info", auth, async (req, res) => {
  try {
    const employee = await Employee.findById(req.body.userId)
    res.status(200).json(employee)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

// @route   POST /employee.update-info
// @desc POST employee info
// @access Private

router.post("/update-info", auth, async (req, res) => {
  const employeeDetails = req.body
  try {
    const userId = employeeDetails.userId
    const employee = await Employee.findById(userId)
    if (employee) {
      employee.firstName = employeeDetails.firstName
      employee.lastName = employeeDetails.lastName
      employee.officialEmail = employeeDetails.officialEmail

      await employee.save()
      res.status(200).json({ message: "Info updated" })
    } else {
      res.status(400).json({ message: "Employee not found" })
    }
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/update-password", auth, async (req, res) => {
  const employeeDetails = req.body
  try {
    const userId = employeeDetails.userId

    const user = await Employee.findById(userId)
    if (user) {
      const isMatch = await bcrypt.compare(
        employeeDetails.oldPassword,
        user.password
      )
      if (isMatch) {
        if (employeeDetails.newPassword.length < 5) {
          res
            .status(400)
            .json({ message: "Password must be atleast 5 characters long" })
        } else {
          const salt = await bcrypt.genSalt(10)
          const hash = await bcrypt.hash(employeeDetails.newPassword, salt)
          user.password = hash
          await user.save()
          res.status(200).json({ message: "Password updated successfully" })
        }
      } else {
        res.status(400).json({ message: "Old password is incorrect" })
      }
    } else {
      res.status(400).json({ message: "User not found" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred while updating details" })
  }
})

// @route   POST /employee.company-info
// @desc Get company info
// @access Private

router.post("/company-info", auth, async (req, res) => {
  try {
    const employeeId = req.body.employeeId
    const employee = await Employee.findById(employeeId)
    const companyInfo = {
      companyName: employee.companyName,
      officialEmail: employee.officialEmail,
      firstName: employee.firstName,
      lastName: employee.lastName,
      companyWebsite: employee.companyWebsite,
      aboutCompany: employee.aboutCompany,
      companyAddress: employee.companyAddress,
      role: employee.role,
      file: employee.file,
    }
    res.status(200).json(companyInfo)
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

// @route   POST /employee.update-company-info
// @desc POST company info
// @access Private

router.post(
  "/update-company-info",
  auth,
  upload.single("file"),
  async (req, res) => {
    const employeeDetails = req.body

    try {
      const employee = await Employee.findById(employeeDetails.employeeId)

      if (employee) {
        const isEmailExists = await Employee.findOne({
          officialEmail: employeeDetails.officialEmail,
        })
        if (isEmailExists) {
          res.status(400).json({ message: "Email already exists" })
        } else {
          employee.companyName = employeeDetails.companyName
          employee.officialEmail = employeeDetails.officialEmail
          employee.firstName = employeeDetails.firstName
          employee.lastName = employeeDetails.lastName
          employee.companyWebsite = employeeDetails.companyWebsite
          employee.aboutCompany = employeeDetails.aboutCompany
          employee.companyAddress = employeeDetails.companyAddress
          employee.role = employeeDetails.role
          employee.file = req.file ? req.file : employee.file

          await employee.save()
          res.status(200).json({ message: "Info updated" })
        }
      } else {
        res.status(400).json({ message: "Employee not found" })
      }
    } catch (err) {
      console.log(err)
      res.status(400).json({ message: err })
    }
  }
)

// @route   POST /employee.dashboard
// @desc Post dashboard info
// @access Private

//Internship

router.post("/dashboard/internship/interested", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Interested"
  const candidateId = application.candidate

  try {
    const isPresent = await InternJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await InternDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Interested"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await InternDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await InternJob.deleteOne({ candidate: candidateId })
    }
    const response = new InternDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Interested List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/internship/shortlisted", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Shortlisted"
  const candidateId = application.candidate

  try {
    const isPresent = await InternJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await InternDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Shortlisted"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await InternDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await InternJob.deleteOne({ candidate: candidateId })
    }
    const response = new InternDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Shortlisted List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/internship/hire", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Hire"
  const candidateId = application.candidate

  try {
    const isPresent = await InternJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await InternDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Hire"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await InternDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await InternJob.deleteOne({ candidate: candidateId })
    }
    const response = new InternDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Hiring List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/internship/not-interested", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Not-Interested"
  const candidateId = application.candidate

  try {
    const isPresent = await InternJob.findOne({
      candidate: candidateId,
    })

    const isPresentInDashboard = await InternDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Not-Interested"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await InternDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await InternJob.deleteOne({ candidate: candidateId })
    }
    const response = new InternDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Not interested List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

//Fresher

router.post("/dashboard/fresher/interested", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Interested"
  const candidateId = application.candidate

  try {
    const isPresent = await FresherJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await FresherDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Interested"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await FresherDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await FresherJob.deleteOne({ candidate: candidateId })
    }
    const response = new FresherDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Interested List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/fresher/shortlisted", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Shortlisted"
  const candidateId = application.candidate

  try {
    const isPresent = await FresherJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await FresherDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Shortlisted"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await FresherDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await FresherJob.deleteOne({ candidate: candidateId })
    }
    const response = new FresherDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Shortlisted List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/fresher/hire", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Hire"
  const candidateId = application.candidate

  try {
    const isPresent = await FresherJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await FresherDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Hire"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await FresherDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await FresherJob.deleteOne({ candidate: candidateId })
    }
    const response = new FresherDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Hiring List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/fresher/not-interested", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Not-Interested"
  const candidateId = application.candidate

  try {
    const isPresent = await FresherJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await FresherDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Not-Interested"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await FresherDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await FresherJob.deleteOne({ candidate: candidateId })
    }
    const response = new FresherDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Not interested List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

//Experience

router.post("/dashboard/experience/interested", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Interested"
  const candidateId = application.candidate

  try {
    const isPresent = await ExperienceJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await ExperienceDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Interested"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await ExperienceDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await ExperienceJob.deleteOne({ candidate: candidateId })
    }
    const response = new ExperienceDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Interested List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/experience/shortlisted", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Shortlisted"
  const candidateId = application.candidate

  try {
    const isPresent = await ExperienceJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await ExperienceDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Shortlisted"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await ExperienceDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await ExperienceJob.deleteOne({ candidate: candidateId })
    }
    const response = new ExperienceDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Shortlisted List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/experience/hire", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Hire"
  const candidateId = application.candidate

  try {
    const isPresent = await ExperienceJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await ExperienceDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Hire"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await ExperienceDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await ExperienceJob.deleteOne({ candidate: candidateId })
    }
    const response = new ExperienceDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Hiring List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

router.post("/dashboard/experience/not-interested", auth, async (req, res) => {
  let application = req.body
  application.dashboardType = "Not-Interested"
  const candidateId = application.candidate

  try {
    const isPresent = await ExperienceJob.findOne({
      candidate: candidateId,
    })
    const isPresentInDashboard = await ExperienceDashboard.findOne({
      candidate: candidateId,
    })

    if (
      isPresentInDashboard &&
      isPresentInDashboard?.dashboardType === "Not-Interested"
    ) {
      return res.status(400).json({ message: "Already added" })
    }

    if (isPresentInDashboard && isPresentInDashboard?.dashboardType !== "") {
      await ExperienceDashboard.deleteOne({ candidate: candidateId })
    }

    if (isPresent) {
      await ExperienceJob.deleteOne({ candidate: candidateId })
    }
    const response = new ExperienceDashboard(application)
    response.save()
    res.status(200).json({ message: "Added to Not interested List" })
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: "Something went wrong" })
  }
})

//get dashboard data

router.post("/dashboard/internship", auth, async (req, res) => {
  const userId = req.body.userId

  try {
    const applications = await InternDashboard.find({ userId: userId })
    res.status(200).json(applications)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.post("/dashboard/fresher", auth, async (req, res) => {
  const userId = req.body.userId

  try {
    const applications = await FresherDashboard.find({ userId: userId })
    res.status(200).json(applications)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

router.post("/dashboard/experience", auth, async (req, res) => {
  const userId = req.body.userId

  try {
    const applications = await ExperienceDashboard.find({ userId: userId })
    res.status(200).json(applications)
  } catch (err) {
    console.log(err)
    res.status(400).json(err)
  }
})

module.exports = router
