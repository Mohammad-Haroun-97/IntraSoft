import React from 'react'
import {AppBar,ButtonBase,Grid,Toolbar,IconButton,Box} from '@material-ui/core'
import {Menu} from '@material-ui/icons'

export interface HeaderBarProps{
    headerActions:React.ReactNode,
    onClickLogo:()=>void,
    logo?:string,
    onClickMenu:()=>void,
}

const HeaderBar:React.FC<HeaderBarProps> =({logo,onClickLogo,onClickMenu,headerActions})=>
    {

    return (
        <>
<AppBar color="secondary" elevation={0} >
<Toolbar>
<Grid container alignItems='center' justifyContent='space-between'  >
<Grid item xs="auto">
<Grid container spacing={1} alignItems="center">
<Grid item xs="auto">
<IconButton onClick={()=>onClickMenu()}>
<Menu/>
</IconButton>
</Grid>

<Grid item xs="auto">
<ButtonBase onClick={()=>onClickLogo()}>
    <img 
    src={logo}
    />
</ButtonBase>
</Grid>

</Grid>

</Grid>
<Grid item xs="auto">
    <Box display="flex" justifyContent="flex-end" alignItems="center">
        {headerActions}
    </Box>

</Grid>
</Grid>
</Toolbar>
</AppBar>
        </>
    )
}
export default HeaderBar