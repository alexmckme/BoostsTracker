const express = require("express")
const app = express()
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
const listingComptesRoutes = require("./routes/listingComptes")

// const path = require('path')
// const cors = require("cors")
require('dotenv').config({ path: "./config/.env" })

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
// app.use(cors())

app.use("/", homeRoutes)
app.use("/listingComptes", listingComptesRoutes)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server running!`)
})

