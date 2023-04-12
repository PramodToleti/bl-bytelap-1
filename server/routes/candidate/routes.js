const express = require("express")
const router = express.Router()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const multer = require("multer")
const upload = multer({ dest: "uploads/" })

const { Candidate } = require("../../models/model")

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

      res
        .status(200)
        .json({ message: "Account created successfully", jwtToken })
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

        res.status(200).json({ message: "Login Successful", jwtToken })
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

module.exports = router
