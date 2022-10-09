import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle=makeStyles(()=>({
    footer:{
width:'100vw',
height:"64px",
backgroundColor:'red'
    }
}))

function Notifier() {
    const styles=useStyle()

    return (
        <>
        <div className={styles.footer}>

        </div>
        </>
    )
    
}

export default Notifier