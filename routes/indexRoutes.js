const {Router} = require("express")

const indexRouter = Router();
const messages = require("../allMessages.js")

indexRouter.get("/" , (req, res)=>{
    res.render("index" , {messages: messages})
} )

module.exports = indexRouter
