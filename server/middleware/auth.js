const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")

dotenv.config()

// Middleware to check if the user is authenticated

const auth = (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1]
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
  const userId = decodedToken.id
  if (req.body.userId && req.body.userId !== userId) {
    throw "Invalid user ID"
  } else {
    next()
  }
}

module.exports = auth
