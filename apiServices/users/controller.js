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
        const email = req.body.email;
        let password = req.body.password;
        const name = req.body.name;
        const lastName = req.body.lastName;
        const phone = req.body.phone;
        const state = req.body.state;

        if(!email || !password || !name || !lastName || !phone || !state){
            return res.status(400).json({msg: "Please fill all the required fields"});
        }

        const salt = genSaltSync(10);
        password = hashSync(password, salt);

        const user = await db.createUser(email, password, name, lastName, phone, state);

        const accessToken = jwt.sign(user, process.env.SECRET_KEY/* , {expiresIn: "30m"} */);
        
        res.cookie("token", accessToken, {
            httpOnly: true, 
            secure: false, 
            SameSite: "strict", 
            expires: new Date(Number(new Date()) + 30*60*1000) 
        });

        res.status(201).json({accessToken: accessToken});

        //return res.redirect("/user");
    } catch (error) {
        console.log(error);
        res.status(400);
    }
}

const userLogin = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const data = await db.getUserByEmail(email);
        const user = data[0];

        if(!user){
            return res.status(404).json({msg: "Incorrect email"});
        }

        const isPasswordValid = compareSync(password, user.password);

        if(isPasswordValid){
            user.password = undefined;
            //const accessToken = jwt.sign(user, process.env.SECRET_KEY/* , {expiresIn: "30m"} */ );
            
            const accessToken = jwt.sign(user, process.env.SECRET_KEY)
            
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

const verifyToken = async (req, res, next) => {
    const token = req.cookies.token;

    if(token === undefined){
        return res.status(401).json({
            msg: "Access denied, unauthorized user."
        })
    } else{

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


module.exports = {
    userMainPage,
    createUser,
    userLogin,
    verifyToken,
};