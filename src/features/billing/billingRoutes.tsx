import React from 'react'
import {Route} from 'react-router-dom'
import BillingList from './screens/BillingListScreen'

export default (()=>{
    return [
            <Route path={`/test`}
             exact 
             key="test"
             render={()=>{
             return   <BillingList/>
             }}
            />
        ]
    


})


    

