const jsonServer=require('json-server')
const server=jsonServer.create()
const middlewares=jsonServer.defaults()
const GETREQUEST=require("./get/all")
const POSTREQUEST=require("./post/all.js")
const DELETEREQUEST=require("./delete/all.js")


server.use(middlewares)
GETREQUEST.bindAll(server)
POSTREQUEST.bindAll(server)
DELETEREQUEST.bindAll(server)



server.listen(3001,()=>{
console.log("JSON SERVER IS RUNNING with 3001 port")
})
