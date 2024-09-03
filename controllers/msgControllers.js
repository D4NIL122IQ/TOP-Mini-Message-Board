const messages = require('../allMessages.JS')

const createNewMsg = ((req,res) =>{
    const newmsg = {
        text: req.body.text,
        user: req.body.user,
        added: new Date().getDate + '/' + new Date().getMonth + '/' +  new Date().getFullYear
    }
    messages.push(newmsg)
    res.render("index" , {messages: messages})
})

const getSpecMsg = ((req,res)=>{
    const msg = messages[req.params.id]
    res.render("messageDetail" , {msg: msg})
})

const getAllMsg = ((req,res)=>{
    res.render("index" , {messages: messages})
})

module.exports = {createNewMsg , getSpecMsg, getAllMsg}