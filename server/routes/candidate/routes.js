const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

const Candidate = require("../../models/candidate/account")
const InternApplication = require("../../models/candidate/Registration/internship")
const FresherApplication = require("../../models/candidate/Registration/fresher")
const ExperienceApplicaton = require("../../models/candidate/Registration/experience")
const InternJob = require("../../models/candidate/Applications/internship")
const FresherJob = require("../../models/candidate/Applications/fresher")
const ExperienceJob = require("../../models/candidate/Applications/experience")
const PostedJobs = require("../../models/employee/Jobs/intern")
const auth = require("../../middleware/auth")

//Create Account
router.post("/create-account", upload.single("file"), async (req, res) => {
  const candidateDetails = req.body

  try {
    const isPresent =
      (await Candidate.findOne({
        emailId: candidateDetails.emailId,
      })) ||
      (await Candidate.findOne({
        mobileNumber: candidateDetails.mobileNumber,
      }))

    if (isPresent) {
      res.status(400).json({ message: "User already exists" })
    } else {
      //Creating Document in MongoDB
      const hashedPassword = await bcrypt.hash(candidateDetails.password, 10)
      const candidate = new Candidate({
        firstName: candidateDetails.firstName,
        lastName: candidateDetails.lastName,
        emailId: candidateDetails.emailId,
        password: hashedPassword,
        mobileNumber: candidateDetails.mobileNumber,
        city: candidateDetails.city,
        agreeToTerms: JSON.parse(candidateDetails.agreeToTerms),
        graduation: JSON.parse(candidateDetails.graduation),
        file: req.file,
      })
      await candidate.save()
      //Generate JWT Token
      const payload = { id: candidate._id, email: candidate.emailId }
      const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "4d",
      })

      res.status(200).json({
        message: "Account created successfully",
        jwtToken,
        userId: candidate._id,
      })
    }
  } catch (err) {
    res.status(400).json({ message: "Something went wrong" })
  }
})

//Login
router.post("/login", async (req, res) => {
  const { emailOrNum = "", password = "" } = req.body

  // Check if input is a valid mobile number
  const isEmail = /\S+@\S+\.\S+/.test(emailOrNum)

  if (isEmail) {
    const isPresent = await Candidate.findOne({
      emailId: emailOrNum,
    })

    if (!isPresent) {
      res.status(400).json({ message: "User not Found" })
    } else {
      const isMatch = await bcrypt.compare(password, isPresent.password)

      if (!isMatch) {
        res.status(400).json({ message: "Invalid Password" })
      } else {
        //Generate JWT Token
        const payload = { id: isPresent._id, email: isPresent.emailId }
        const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "4d",
        })

        res.status(200).json({
          message: "Login Successful",
          jwtToken,
          userId: isPresent._id,
        })
      }
    }
  } else {
    // Check if input is a valid mobile number
    const isMobile = /^\d{10}$/.test(emailOrNum)

    if (isMobile) {
      const isPresent = await Candidate.findOne({
        mobileNumber: emailOrNum,
      })

      if (!isPresent) {
        res.status(400).json({ message: "User not Found" })
      } else {
        const isMatch = await bcrypt.compare(password, isPresent.password)

        if (!isMatch) {
          res.status(400).json({ message: "Invalid Password" })
        } else {
          //Generate JWT Token
          const payload = { id: isPresent._id, email: isPresent.emailId }
          const jwtToken = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: "4d",
          })

          res.status(200).json({ message: "Login Successful", jwtToken })
        }
      }
    } else {
      // Return error message if input is not a valid email address or mobile number
      res.status(400).json({ error: "Invalid email or mobile number" })
    }
  }
})

//Registration
router.post(
  "/internship/register",
  upload.fields([
    { name: "achievementsFiles", maxCount: 10 },
    { name: "trainingFiles", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const details = req.body

      const isPresent = await Candidate.findOne({
        _id: details.candidate,
      })

      const duplicate = await InternApplication.findOne({
        candidate: details.candidate,
      })

      if (duplicate) {
        const username = isPresent.firstName + " " + isPresent.lastName
        const updatedJobApplication = await InternApplication.findOneAndUpdate(
          { candidate: details.candidate }, // Find document based on candidate
          {
            type: "Internship",
            candidate: details.candidate,
            username,
            jobTitle: details.jobTitle,
            jobTime: details.jobTime,
            jobType: details.jobType,
            skills: JSON.parse(details.skills),
            coverLetter: details.coverLetter,
            degree: JSON.parse(details.degree),
            achievements: JSON.parse(details.achievements) || [],
            achievementsFiles: req.files.achievementsFiles || [],
            training: JSON.parse(details.training) || [],
            trainingFiles: req.files.trainingFiles || [],
            projectDetails: JSON.parse(details.projectDetails) || [],
            time: details.time,
            achievements: JSON.parse(details.achievements) || [],
            availability: details.availability,
            languages: JSON.parse(details.languages),
          }
        )
        res.status(200).json({ message: "Data updated Successfully" })
      } else if (!isPresent) {
        res.status(400).json({ message: "User not Found" })
      } else {
        const username = isPresent.firstName + " " + isPresent.lastName

        const jobApplication = new InternApplication({
          type: "Internship",
          candidate: details.candidate,
          username,
          jobTitle: details.jobTitle,
          jobTime: details.jobTime,
          jobType: details.jobType,
          skills: JSON.parse(details.skills),
          coverLetter: details.coverLetter,
          degree: JSON.parse(details.degree),
          achievements: JSON.parse(details.achievements),
          achievementsFiles: req.files.achievementsFiles,
          training: JSON.parse(details.training),
          trainingFiles: req.files.trainingFiles,
          projectDetails: JSON.parse(details.projectDetails),
          time: details.time,
          achievements: JSON.parse(details.achievements),
          availability: details.availability,
          languages: JSON.parse(details.languages),
        })

        const savedJobApplication = await jobApplication.save()
        res.status(200).json({ message: "Registered Successfully" })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        error: "An error occurred while registering the job application",
      })
    }
  }
)

router.post(
  "/fresher/register",
  upload.fields([
    { name: "achievementsFiles", maxCount: 10 },
    { name: "trainingFiles", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const details = req.body

      const isPresent = await Candidate.findOne({
        _id: details.candidate,
      })

      const duplicate = await FresherApplication.findOne({
        candidate: details.candidate,
      })

      if (duplicate) {
        await FresherApplication.findOneAndUpdate(
          { candidate: details.candidate },
          {
            type: "Fresher",
            candidate: details.candidate,
            username: isPresent.firstName + " " + isPresent.lastName,
            jobTitle: details.jobTitle,
            jobTime: details.jobTime,
            jobType: details.jobType,
            shift: details.shift,
            skills: JSON.parse(details.skills),
            salaryType: details.salaryType,
            salaryRange: JSON.parse(details.salaryRange),
            coverLetter: details.coverLetter,
            degree: JSON.parse(details.degree),
            projectDetails: JSON.parse(details.projectDetails) || [],
            training: JSON.parse(details.training) || [],
            trainingFiles: req.files.trainingFiles || [],
            achievements: JSON.parse(details.achievements) || [],
            achievementsFiles: req.files.achievementsFiles || [],
            preferredLocation: details.preferredLocation || [],
            languages: JSON.parse(details.languages),
            availability: details.availability,
            time: details.time,
          }
        )

        res.status(200).json({ message: "Data Updated Successfully" })
      } else if (!isPresent) {
        res.status(400).json({ message: "User not Found" })
      } else {
        const username = isPresent.firstName + " " + isPresent.lastName

        const jobApplication = new FresherApplication({
          type: "Fresher",
          candidate: details.candidate,
          username,
          jobTitle: details.jobTitle,
          jobTime: details.jobTime,
          jobType: details.jobType,
          shift: details.shift,
          skills: JSON.parse(details.skills),
          salaryType: details.salaryType,
          salaryRange: JSON.parse(details.salaryRange),
          coverLetter: details.coverLetter,
          degree: JSON.parse(details.degree),
          projectDetails: JSON.parse(details.projectDetails),
          training: JSON.parse(details.training),
          trainingFiles: req.files.trainingFiles,
          achievements: JSON.parse(details.achievements),
          achievementsFiles: req.files.achievementsFiles,
          preferredLocation: details.preferredLocation,
          languages: JSON.parse(details.languages),
          availability: details.availability,
          time: details.time,
        })

        const savedJobApplication = await jobApplication.save()
        res.status(200).json({ message: "Registered Successfully" })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "An error occurred while registering the job application",
      })
    }
  }
)

router.post(
  "/experience/register",
  upload.fields([
    { name: "achievementsFiles", maxCount: 10 },
    { name: "trainingFiles", maxCount: 10 },
  ]),
  async (req, res) => {
    try {
      const details = req.body

      const isPresent = await Candidate.findOne({
        _id: details.candidate,
      })

      const duplicate = await ExperienceApplicaton.findOne({
        candidate: details.candidate,
      })

      if (duplicate) {
        const username = isPresent.firstName + " " + isPresent.lastName
        const jobApplication = await ExperienceApplicaton.findOneAndUpdate({
          type: "Experience",
          candidate: details.candidate,
          username,
          jobTitle: details.jobTitle,
          jobTime: details.jobTime,
          jobType: details.jobType,
          shift: details.shift,
          skills: JSON.parse(details.skills),
          experience: JSON.parse(details.experience),
          ctc: JSON.parse(details.ctc),
          coverLetter: details.coverLetter,
          degree: JSON.parse(details.degree),
          employementHistory: JSON.parse(details.employementHistory),
          projectDetails: JSON.parse(details.projectDetails) || [],
          training: JSON.parse(details.training) || [],
          trainingFiles: req.files.trainingFiles || [],
          achievements: JSON.parse(details.achievements) || [],
          achievementsFiles: req.files.achievementsFiles || [],
          preferredLocation: details.preferredLocation || [],
          languages: JSON.parse(details.languages),
          availability: details.availability,
          time: details.time,
        })

        res.status(200).json({ message: "Data Updated Successfully" })
      } else if (!isPresent) {
        res.status(400).json({ message: "User not Found" })
      } else {
        const username = isPresent.firstName + " " + isPresent.lastName

        const jobApplication = new ExperienceApplicaton({
          type: "Experience",
          candidate: details.candidate,
          username,
          jobTitle: details.jobTitle,
          jobTime: details.jobTime,
          jobType: details.jobType,
          shift: details.shift,
          skills: JSON.parse(details.skills),
          experience: JSON.parse(details.experience),
          ctc: JSON.parse(details.ctc),
          coverLetter: details.coverLetter,
          degree: JSON.parse(details.degree),
          employementHistory: JSON.parse(details.employementHistory),
          projectDetails: JSON.parse(details.projectDetails),
          training: JSON.parse(details.training),
          trainingFiles: req.files.trainingFiles,
          achievements: JSON.parse(details.achievements),
          achievementsFiles: req.files.achievementsFiles,
          preferredLocation: details.preferredLocation,
          languages: JSON.parse(details.languages),
          availability: details.availability,
          time: details.time,
        })

        const savedJobApplication = await jobApplication.save()
        res.status(200).json({ message: "Registered Successfully" })
      }
    } catch (error) {
      console.log(error)
      res.status(500).json({
        message: "An error occurred while registering the job application",
      })
    }
  }
)

// @route  POST /internship/apply
// @desc   Apply for internship
// @access Public
router.post("/internship/apply", async (req, res) => {
  try {
    const userId = req.body.userId
    const jobId = req.body.jobId

    const isApplied = await InternJob.find({ candidate: userId })

    let jobName = await PostedJobs.findOne({ _id: jobId })

    jobName = jobName.toObject().jobTitle

    const appliedJobs = isApplied.map((each) => each.jobName)

    if (appliedJobs.includes(jobName)) {
      res.status(400).json("You already applied for this job")
    } else {
      const candidateData = await InternApplication.findOne({
        candidate: userId,
      })

      if (!candidateData) {
        res.status(400).json("Register first to apply for a Job")
      } else {
        let candidateDataObj = candidateData.toObject()

        delete candidateDataObj._id

        candidateDataObj.jobName = jobName

        if (candidateDataObj) {
          const application = new InternJob(candidateDataObj)
          application.save()
          res.status(200).json("Job Applied Successfully")
        } else {
          res.status(400).json("User not found")
        }
      }
    }
  } catch (err) {
    console.log(err)
    res.status(400).json("Something went wrong")
  }
})

// @route  POST /fresher/apply
// @desc   Apply for fresher
// @access Public
router.post("/fresher/apply", async (req, res) => {
  try {
    const userId = req.body.userId
    const jobId = req.body.jobId

    const isApplied = await FresherJob.find({ candidate: userId })

    let jobName = await PostedJobs.findOne({ _id: jobId })

    jobName = jobName.toObject().jobTitle

    const appliedJobs = isApplied.map((each) => each.jobName)

    if (appliedJobs.includes(jobName)) {
      res.status(400).json("You already applied for this job")
    } else {
      const candidateData = await FresherApplication.findOne({
        candidate: userId,
      })

      if (!candidateData) {
        res.status(400).json("Register first to apply for a Job")
      } else {
        let candidateDataObj = candidateData.toObject()

        delete candidateDataObj._id

        candidateDataObj.jobName = jobName

        if (candidateDataObj) {
          const application = new FresherJob(candidateDataObj)
          application.save()
          res.status(200).json("Job Applied Successfully")
        } else {
          res.status(400).json("User not found")
        }
      }
    }
  } catch (err) {
    console.log(err)
    res.status(400).json("Something went wrong")
  }
})

// @route  POST /experience/apply
// @desc   Apply for Experience
// @access Public
router.post("/experience/apply", async (req, res) => {
  try {
    const userId = req.body.userId
    const jobId = req.body.jobId

    const isApplied = await ExperienceJob.find({ candidate: userId })

    let jobName = await PostedJobs.findOne({ _id: jobId })

    jobName = jobName.toObject().jobTitle

    const appliedJobs = isApplied.map((each) => each.jobName)

    if (appliedJobs.includes(jobName)) {
      res.status(400).json("You already applied for this job")
    } else {
      const candidateData = await ExperienceApplicaton.findOne({
        candidate: userId,
      })

      if (!candidateData) {
        res.status(400).json("Register first to apply for a Job")
      } else {
        let candidateDataObj = candidateData.toObject()

        delete candidateDataObj._id

        candidateDataObj.jobName = jobName

        if (candidateDataObj) {
          const application = new ExperienceJob(candidateDataObj)
          application.save()
          res.status(200).json("Job Applied Successfully")
        } else {
          res.status(400).json("User not found")
        }
      }
    }
  } catch (err) {
    console.log(err)
    res.status(400).json("Something went wrong")
  }
})

// @route   GET /applications
// @desc    Get all the applications
// @access  Private
router.post("/applications", auth, async (req, res) => {
  try {
    const internApplications = await InternJob.find()
    const fresherApplications = await FresherJob.find()
    const experienceApplications = await ExperienceJob.find()
    const applications = [
      ...internApplications,
      ...fresherApplications,
      ...experienceApplications,
    ]
    res.status(200).json(applications)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred while fetching jobs" })
  }
})

// @route   GET /jobs/
// @desc    Get all the jobs
// @access  Public
router.get("/jobs", async (req, res) => {
  try {
    const jobs = await PostedJobs.find()
    res.status(200).json(jobs)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred while fetching jobs" })
  }
})

// @route  GET candidate/my-info
// @desc   Get candidate info
// @access Private

router.post("/my-info", auth, async (req, res) => {
  try {
    const candidate = await Candidate.findOne({ _id: req.body.userId })
    res.status(200).json(candidate)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred while fetching details" })
  }
})

// @route  POST candidate/my-info
// @desc   Update candidate info
// @access Private

router.post("/update-info", auth, upload.single("file"), async (req, res) => {
  const candidateDetails = req.body
  try {
    const userId = candidateDetails.userId
    const candidate = await Candidate.findById(userId)
    if (candidate) {
      candidate.firstName = candidateDetails.firstName
      candidate.lastName = candidateDetails.lastName
      candidate.emailId = candidateDetails.emailId
      candidate.mobile = candidateDetails.mobile
      candidate.city = candidateDetails.city
      candidate.file = req.file

      await candidate.save()
      res.status(200).json({ message: "Updated Successfully" })
    } else {
      res.status(400).json({ message: "User not found" })
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "An error occurred while updating details" })
  }
})

// @route  POST candidate/update-password
// @desc   Update candidate password
// @access Private

router.post("/update-password", auth, async (req, res) => {
  const candidateDetails = req.body
  try {
    const userId = candidateDetails.userId

    const user = await Candidate.findById(userId)
    if (user) {
      const isMatch = await bcrypt.compare(
        candidateDetails.oldPassword,
        user.password
      )
      if (isMatch) {
        if (candidateDetails.newPassword.length < 5) {
          res
            .status(400)
            .json({ message: "Password must be atleast 5 characters long" })
        } else {
          const salt = await bcrypt.genSalt(10)
          const hash = await bcrypt.hash(candidateDetails.newPassword, salt)
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

module.exports = router
