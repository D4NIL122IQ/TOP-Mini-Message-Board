const {Router} = require("express")

const msgRouter = Router();
const messages = require("../allMessages.js")

msgRouter.get("/new" , (req, res)=>{
    res.render("formNewMsg")
} )

msgRouter.get("/:id" , (req , res)=>{
    const msg = messages[req.params.id]
    res.render("messageDetail" , {msg: msg})
})

module.exports = msgRouter