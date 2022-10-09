const Billing=require('./billing')

exports.bindAll=(server)=>{
    Billing.bind(server)
}