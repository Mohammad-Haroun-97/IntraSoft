exports.bind=(server)=>{
    server.delete("/billing/:id",(req,res)=>{
        res.status(204).json({})
    })
}