const express = require("express");
const router = express.Router();
const {userMainPage, createUser, userLogin} = require("./controller");

router.get("/user", userMainPage, (req, res, next) => {
    next();
})

router.post("/signup", createUser, (req, res, next) => {
    next();
});

router.post("/login", userLogin, (req, res, next) => {
    next();
});

module.exports = router;