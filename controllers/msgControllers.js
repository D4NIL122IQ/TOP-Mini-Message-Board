const messages = require('../allMessages.JS')

const createNewMsg = ((req,res) =>{
    const temp = new Date()
    const newmsg = {
        text: req.body.text,
        user: req.body.user,
        added: temp.getDate() + '/' + temp.getMonth() + '/' +  temp.getFullYear()
    }
    messages.push(newmsg)
    res.redirect("/");
})

const getSpecMsg = ((req,res)=>{
    const msg = messages[req.params.id]
    res.render("messageDetail" , {msg: msg})
})

const getAllMsg = ((req,res)=>{
    res.render("index" , {messages: messages})
})

module.exports = {createNewMsg , getSpecMsg, getAllMsg}