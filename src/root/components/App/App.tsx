import React from "react";
import {BrowserRouter as Router} from 'react-router-dom'
import {makeStyles} from '@material-ui/core'
import MainLayout from '../../../layout/components/MainLayout/MainLayout'
import AppRoutes from '../AppRoutes/AppRoutes'
import Notifier from '../../../common/components/Notifer/Notifer'

const useStyle=makeStyles((theme)=>({
    app:{
        display:'flex',
        flex:1
    },
    container:{
  overflow:'auto',
  minHeight:'100vh'
    },
    main:{
        width:"100%",
        height:"100%",
        backgroundColor:theme.palette.common.white,
        overflowX:'auto',
        overflowY:'hidden'

    },
    footer:{
        width:"100%",
        height:"64px",
        backgroundColor:theme.palette.primary.dark,
        bottom:0,
        zIndex:9999
    }
}))


function App():JSX.Element {
const styles=useStyle()

    return (
<div className={styles.app} >
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