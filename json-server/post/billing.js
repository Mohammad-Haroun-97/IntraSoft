const bodyParser=require('body-parser')

exports.bind=(server)=>{
    server.use(bodyParser.urlencoded({extended:false}))
    server.use(bodyParser.json())

    server.post('/billing',(req,res)=>{
        res.json(req.body)


    server.put('/billing/:id',(req,res)=>{
            res.json(req.body)
        })
        
    })
}

