const repl = require("repl")
const models = require("../models/index")

const replServer = repl.start()

Object.assign(replServer.context, models)
