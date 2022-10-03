//! response handling
// module that allows customizing the output of a response
const chalk = require('chalk');
//Errors customizing for controllers
//function that represents successful response and sends it in body
const success = (req,res,message,codeStatus)=>{
    res.status(codeStatus || 200).send({
        error: '',
        body: message
    })
}
//function that generates a failed response and sends it in the body
const error = (req,res,error, codeStatus, details)=>{
    console.log('[Response Error]'+details);
    res.status(codeStatus || 500).send({
        error: error,
        body: ''
    });
}

module.exports = {
    success,
    error
}