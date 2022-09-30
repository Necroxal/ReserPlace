const express = require("express");
const router = express.Router();
const {
    userMainPage, 
    createUser, 
    userLogin, 
    updateUserInfo, 
    userLogout
} = require("./controller");

router.get("/user", userMainPage, (req, res, next) => {
    next();
})

router.patch("/user", updateUserInfo, (req, res, next) => {
    next();
})

router.post("/signup", createUser, (req, res, next) => {
    next();
});

router.post("/login", userLogin, (req, res, next) => {
    next();
});

router.get("/logout", userLogout, (req, res, next) => {
    next();
})

module.exports = router;