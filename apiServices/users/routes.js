const express = require("express");
const router = express.Router();
const {
    userMainPage, 
    createNewUser, 
    userLogin, 
    updateUserInfo, 
    userLogout
} = require("../../middleware/users");


// Import all our middleware and add them to their respective route.
router.get("/user", userMainPage, (req, res, next) => {
    next();
})

router.patch("/user", updateUserInfo, (req, res, next) => {
    next();
})

router.post("/signup", createNewUser, (req, res, next) => {
    next();
});

router.post("/login", userLogin, (req, res, next) => {
    next();
});

router.get("/logout", userLogout, (req, res, next) => {
    next();
})

module.exports = router;