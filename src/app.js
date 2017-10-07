const express = require("express")
const flash = require("flash")
const session = require("express-session")
const path = require("path")
const bodyParser = require("body-parser")

const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(express.static(path.join(__dirname, "/../public"))) //public folder!
app.use(session({
    key: 'user_sid',
    secret: 'sessionSecret',
    resave: true,
    saveUninitialized: false,
}))
app.use(flash())

app.get('/', function (req, res) {
    req.flash('success', 'Thank you! Your feedback has been submitted.' )
    res.render('index')
})

const port = 8080
app.listen(port, function () {
    console.log("Listening on localhost:" + port)
})
