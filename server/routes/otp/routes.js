const fs = require("fs")
const express = require("express")
const router = express.Router()
const dotenv = require("dotenv")
const SibApiV3Sdk = require("sib-api-v3-sdk")
const path = require("path")
const otpTemplatePath = path.join(
  __dirname,
  "..",
  "..",
  "assets",
  "otpTemplate.html"
)

const { Employee } = require("../../models/employee/account")

dotenv.config()

router.post("/send-otp", async (req, res) => {
  const { email } = req.body

  //Check if email exists
  const isPresent = await Employee.findOne({ officialEmail: email })

  if (isPresent) {
    res.status(400).json({ message: "Email already exists" })
  } else {
    //Generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000)
    //Expires in 5 minutes
    const expires = Date.now() + 5 * 60 * 1000

    //OTP Template
    const htmlTemplate = fs.readFileSync(otpTemplatePath, "utf-8")
    const html = htmlTemplate.replace("${otp}", otp)

    const defaultClient = SibApiV3Sdk.ApiClient.instance

    //Configure API key authorization: api-key
    const apiKey = defaultClient.authentications["api-key"]
    apiKey.apiKey = process.env.SIB_API_KEY

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

    //Message
    const message = new SibApiV3Sdk.SendSmtpEmail()

    message.subject = "OTP Verification Code"
    message.htmlContent = html
    message.sender = {
      name: "Bytelap Technologies",
      email: "info@bytelap.com",
    }
    message.to = [{ email: email }]

    //Send email
    apiInstance
      .sendTransacEmail(message)
      .then(function (data) {
        console.log(data)
        res.status(200).json({
          message: "OTP sent to your email address.",
          otp: otp,
          expires: expires,
        })
      })
      .catch(function (error) {
        console.error(error)
        res.status(500).json({ message: "Something went wrong" })
      })
  }
})

module.exports = router
