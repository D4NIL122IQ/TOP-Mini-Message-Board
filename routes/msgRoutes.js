const {Router} = require("express")

const msgRouter = Router();
const {getSpecMsg} = require('../controllers/msgControllers')


msgRouter.get("/new" , (req, res)=>{
    res.render("formNewMsg")
} )

msgRouter.get("/:id" , getSpecMsg)

module.exports = msgRouter