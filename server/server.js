const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")

dotenv.config()

const app = express()

app.use(bodyParser.json())
app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 8000
const MONGO_URL = process.env.MONGO_URL

// Connect to MongoDB
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongdoDB")
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  })
  .catch((err) => {
    console.log(`Error: ${err}`)
  })

app.get("/", (req, res) => {
  res.status(200).send("MongoDB Connected Successfully")
})
