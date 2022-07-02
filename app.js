require("dotenv/config")
require("./db")

const express = require("express")
const app = express()

require("./config")(app)

//Start handling routes below
const allRoutes = require("./routes/index.routes")
app.use("/", allRoutes)

//To handle errors
require("./error-handling")(app)

module.exports = app
