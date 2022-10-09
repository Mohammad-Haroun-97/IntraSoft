const billing={
pageMetaData:{
    billingSegment:"aaaaa",
    Code:"bbbb",
    description:"ccc",
    },
    
content:[
    {
id:"1",
billingSegment:"aaaaa",
Code:"bbbb",
description:"ccc",
ownerCl:"ccc",
    },
    {
id:"2",
billingSegment:"aaaaa",
Code:"bbbb",
description:"ccc",
ownerCl:"ccc",
    },
    {
id:"3",
billingSegment:"aaaaa",
Code:"bbbb",
description:"ccc",
ownerCl:"ccc",
    },
    {
id:"4",
billingSegment:"aaaaa",
Code:"bbbb",
description:"ccc",
ownerCl:"ccc",
    },
]}
exports.bind=(server)=>{
 server.get('/billing',(req,res)=>{
    res.json(billing)
 })

 server.get('/billing/:id',(req,res)=>{
    const {id}=req.params
    const singleEntity=billing.content.filter((item)=>{return item.id==id})[0] || {}
    res.jsonp(singleEntity)
 })
}
