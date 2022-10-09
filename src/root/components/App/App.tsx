import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import MainLayout from '../../../layout/components/MainLayout/MainLayout'
import AppRoutes from '../AppRoutes/AppRoutes'
import Notifier from '../../../common/components/Notifer/Notifer'

const useStyle=makeStyles((theme)=>({
    main:{
        width:"100%",
        height:"80px",
        backgroundColor:'green'

    },
    container:{
        width:"100%",
        height:"500px",
        backgroundColor:'white'


    },
    footer:{
        width:"100%",
        height:"80px",
        backgroundColor:'yellow'
    }
}))


function App():JSX.Element {
const styles=useStyle()

    return (
<div>
    <Router>
        <main className={styles.main}>
            <MainLayout />
            <div className={styles.container}>
            <AppRoutes/>
            </div>
            <div className={styles.footer} >
            <Notifier/>
            </div>
        </main>
    </Router>
</div>
    )
}

export default App