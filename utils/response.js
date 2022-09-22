//! response handling
// module that allows customizing the output of a response
const chalk = require('chalk');

//Errors customizing for controllers
const succes = (req,res,message,codeStatus)=>{
    res.status(codeStatus || 200).send({
        error: '',
        body: message
    })
}

const error = (req,res,error, codeStatus, details)=>{
    console.log(chalk.red('[Response Error]'+details));
    res.status(codeStatus || 500).send({
        error: error,
        body: ''
    });
}

module.exports = {
    succes,
    error
}