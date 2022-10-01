require("dotenv").config();
const { genSalt, genSaltSync, hashSync, compareSync } = require("bcrypt");
const { json } = require("body-parser");
const jwt = require("jsonwebtoken");
const db = require("./model");

const userMainPage = (req, res) => {
    res.status(200).send(`User Main Page`)
}

const createUser = async (req, res, next) => {
    try {
        // Store the request info
        const email = req.body.email;
        let password = req.body.password; // This will be hashed for security reasons.
        const name = req.body.name;
        const lastName = req.body.lastName;
        const phone = req.body.phone;
        const state = req.body.state;

        // Make sure that all the data in introduced, if not ask for the completion of all the fields.
        if(!email || !password || !name || !lastName || !phone || !state){
            return res.status(400).json({msg: "Please fill all the required fields"});
        }

        // Hash password for storage.
        const salt = genSaltSync(10);
        password = hashSync(password, salt);

        // Create user with the required parameters.
        const user = await db.createUser(email, password, name, lastName, phone, state);

        // user.toJSON() converts the response into a simple object with it's values.
        const accessToken = jwt.sign(user.toJSON(), process.env.SECRET_KEY/* , {expiresIn: "30m"} */);
        
        // Store the user session on the client cookies.
        res.cookie("token", accessToken, {
            httpOnly: true, 
            secure: false, 
            SameSite: "strict", 
            expires: new Date(Number(new Date()) + 30*60*1000) 
        });

        // Send back the session token as response (Will be changed when deployed to redirect).
        res.status(201).json({accessToken: accessToken});

        //return res.redirect("/user");
    } catch (error) {
        console.log(error);
        res.status(400);
    }
}

const userLogin = async (req, res, next) => {
    try {
        // Store the request info
        const email = req.body.email;
        const password = req.body.password;
        const data = await db.getUserByEmail(email);
        const user = data[0]; // Sequelize returns the info as arrays.

        // If we don't get an user from the database, their email doesn't exist in the database.
        if(!user){
            return res.status(404).json({msg: "Incorrect email"});
        }

        // compare the request password, hash it an then compare it with the password in the database.
        const isPasswordValid = compareSync(password, user.password);

        if(isPasswordValid){
            // If the both passwords match, delete the request password(for security reasons).
            user.password = undefined;
            
            // Create a new session token.
            const accessToken = jwt.sign(user, process.env.SECRET_KEY)
            
            // Store the token in the client's cookies.
            res.cookie("token", accessToken, {
                httpOnly: true,
                secure: false,
                SameSite: "strict",
                expires: new Date(Number(new Date()) + 30*60*1000)
            });

            res.status(200).json(accessToken);
        } else{
            res.status(401).json({msg: "incorrect password"})
        }

    } catch (error) {
        console.log({msg: error});
        res.status(401);
    }
}

// To logout a user we need to delete the jwt token from the client's cookies
const userLogout = async (req, res, next) =>{
    res.cookie("token", "", { maxAge: 1 });
    res.redirect("/");
}

const updateUserInfo = async(req, res, next) => {
    try {
        const newData = req.body;   // Store the new data.
        const data = await db.getUserByEmail(req.body.email);   // Get the user to update.

        await db.updateUser(data[0], newData); // Update the user's info.

        res.status(200).json({msg: "User updated"});
    } catch (error) {
        console.log({msg: error});
        res.status(500).json({msg: "Something went wrong"});
    }
}

// Verify that the jwt session token is valid.
const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;

    // If the token doesn't exist deny access.
    if(token === undefined){
        return res.status(401).json({
            msg: "Access denied, unauthorized user."
        })
    } else{

        // If the token doesn't match with the secret key the user is denied from accessing.
        jwt.verify(token, process.env.SECRET_KEY, (err, authData) => {
            if(err){
                res.status(401).json({
                    msg: "Invalid token"
                })
            } else{
                next();
            }
        });
    }
}

// Export the middleware.
module.exports = {
    userMainPage,
    createUser,
    userLogin,
    verifyToken,
    updateUserInfo,
    userLogout,
};