const express = require("express")
const router = express.Router()

router.get("/", (req, res) =>  {
   // res.flash('info', 'Test Flash Message!')
    res.render("index")
})

module.exports = router
