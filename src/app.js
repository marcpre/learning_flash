const express = require("express")
const flash = require("flash")
const session = require("express-session")
const path = require("path")
const app = express()

app.set("views", path.join(__dirname, "views"))
app.set("view engine", "pug")
app.use(express.static(path.join(__dirname, "/../public"))) //public folder!
app.use(flash)
app.use(session({
    key: 'user_sid',
    secret: 'sessionSecret',
    resave: true,
    saveUninitialized: false,
}));

app.get('/', function(req, res) {
    res.flash('info', 'Test Flash Message!')
    res.render("index")
})

const port = process.env.APP_PORT || 8080
const host = process.env.APP_HOST || "localhost"

app.listen(port, function() {
    console.log("Listening on " + host + ":" + port)
})