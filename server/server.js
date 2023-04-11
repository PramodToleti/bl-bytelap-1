const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const morgan = require("morgan")
const cors = require("cors")
const dotenv = require("dotenv")
//Routes
const candidateRouter = require("./routes/candidate/routes")

dotenv.config()

const app = express()

app.use(morgan("dev"))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

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

app.use("/candidate", candidateRouter)
