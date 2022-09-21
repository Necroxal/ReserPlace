const userMainPage = (req, res) => {
    res.status(200).send(`User Main Page`)
}

const createUser = (req, res) => {
    res.status(200).send(`User created`)
}

const userLogin = (req, res) => {
    res.status(200).send(`User logged in`)
}
module.exports = {
    userMainPage,
    createUser,
    userLogin,
};