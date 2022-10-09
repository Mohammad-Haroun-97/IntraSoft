import billingRoutes from "../../../features/billing/billingRoutes";
import { Switch,Route } from "react-router-dom";
import React from 'react'
import HomePage from '../../../layout/components/HomeLayout/HomeLayout'

function AppRoutes():JSX.Element {

    return(
    <>
<Switch>
    <Route path={'/home'} exact >
        <HomePage/>
    </Route>
    {billingRoutes()}
</Switch>
    </>
    )
    
}

export default AppRoutes
