const express = require("express")
const app = express()
const mongoose = require("mongoose")
const passport = require("passport")
const session = require("express-session")
const MongoStore = require('connect-mongo')
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require("./config/database")
const homeRoutes = require("./routes/home")
const listingComptesRoutes = require("./routes/listingComptes")
const listingIndividuelRoutes = require("./routes/listingIndividuel")

// const path = require('path')
// const cors = require("cors")
require('dotenv').config({ path: "./config/.env" })

// passport config
require("./config/passport")(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// app.use(cors())

// Sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
            mongoUrl: process.env.DB_STRING,
            dbName: "boostsTracker",
            collectionName: "sessions"
        }),
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())


app.use("/", homeRoutes)
app.use("/listingComptes", listingComptesRoutes)
app.use("/listingIndividuel", listingIndividuelRoutes)

app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server running!`)
})

