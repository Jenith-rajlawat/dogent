import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AddIcon from '@mui/icons-material/Add';
export const SidebarData=[
    {
        title:"My Account",
        icon:<PermIdentityIcon />,
        link:"/daccount"

    },
    {
        title:"My Donation",
        icon:<VolunteerActivismIcon />,
        link:"/donation"

    },
    {
        title:"Donate Now",
        icon:<AddIcon />,
        link:"/dnow"

    }

] ;