const {Router} = require("express")

const msgRouter = Router();


msgRouter.get("/new" , (req, res)=>{
    res.render("index" , {messages: messages})
} )

module.exports = msgRouter