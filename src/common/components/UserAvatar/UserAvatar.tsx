import React from 'react'
import {Link,Avatar,IconButton} from '@material-ui/core'
import avatar from '../../assets/avatar.png'

function UserAvatar() {

    return (

        <Link component={IconButton} >
        <Avatar src={avatar} />
        </Link>
   
    )
    
}

export default UserAvatar