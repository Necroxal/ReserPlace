// module that allows customizing the output of a response

//Errors customizing for controllers
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