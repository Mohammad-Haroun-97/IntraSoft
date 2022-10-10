import React from "react";
import {makeStyles} from "@material-ui/core"
import {Box} from '@material-ui/core'
import HeaderBar from './HeaderBar'
import logo from '../../../assets/logo.svg'
import GetHelp from '../../../common/components/GetHelp/GetHelp'
import Notification from '../../../common/components/Notification/Notification'
import Language from '../../../common/components/Language/Language'
import Logout from '../../../common/components/Logout/Logout'
import UserAvatar from '../../../common/components/UserAvatar/UserAvatar'


const useStyle=makeStyles((theme)=>({

toolBarContainer:{
position:'absolute',
top:0,
width:"100%"
    }

}))



function MainLayout() {
    const styles=useStyle()
   function toggleDrawer() {
    console.log("toggleDrawer");
    
   } 
   function toggleLogo() {
    console.log("toggleLogo");
    
} 

    return (
        <>
 <Box className={styles.toolBarContainer}>
{
    <HeaderBar 
    onClickMenu={toggleDrawer}
    logo={logo}
    onClickLogo={toggleLogo}
    headerActions={
        <>
        <Language />
        <GetHelp/>
        <Notification/>
        <UserAvatar/>
        <Logout/>
        </>
    }
    />
}
 </Box>
        </>
    )
    
}
export default MainLayout