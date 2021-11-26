// ./routes/index.js

const { application } = require("express")
const express = require("express")
const router = express.Router()

const indexController = require("./../controllers/indexController")


router.get("/", indexController.home)
router.get("/signup", indexController.viewSignup)
router.get("/login", indexController.viewLogin)

router.post("/signup", indexController.signup)
router.post("/signup", indexController.login)




module.exports = router