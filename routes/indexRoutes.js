const {Router} = require("express")
const indexRouter = Router();
const {createNewMsg , getAllMsg} = require('../controllers/msgControllers.js')

indexRouter.get("/" , getAllMsg )
indexRouter.post("/", createNewMsg)

module.exports = indexRouter
