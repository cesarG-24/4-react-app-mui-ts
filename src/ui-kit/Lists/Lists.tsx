import React from 'react'
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import InfoIcon from '@mui/icons-material/Info';
import {Box, Divider, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import {NavLink} from "react-router-dom";
import {deepPurple} from "@mui/material/colors";

import {theme} from "../Theme";


export const Lists = () => {

    return (
        <Box sx={{
            toolbar: theme.mixins.toolbar, backgroundColor: deepPurple[100],
        }}>
            <List component='nav'>
                <NavLink to="/about" style={{textDecoration: 'none', color: theme.palette.primary.main,}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <InfoIcon/>
                        </ListItemIcon>
                        <ListItemText primary='About' secondary='Info. About the project'/>
                    </ListItemButton>
                </NavLink>

                <NavLink to="/contact" style={{textDecoration: 'none', color: theme.palette.primary.main}}>
                    <ListItemButton>
                        <ListItemIcon>
                            <ContactPhoneIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Contact' secondary='Contact info'/>
                    </ListItemButton>
                </NavLink>
                <Divider/>
            </List>
        </Box>)
}