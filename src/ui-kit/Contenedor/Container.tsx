import {HTMLAttributes, useState} from 'react'
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import {MenuBox} from "../MenuBox";


interface Props extends HTMLAttributes<HTMLDivElement> {
    readonly children: any;
}


export const Container = ({children}: Props) => {
    const [open, setOpen] = useState<boolean>(false);
    const handleOpen = () => setOpen(!open)

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position={"fixed"}>
                <Toolbar>
                    <Box width="100%" display="flex" alignItems="center" flexDirection="row"
                         justifyContent="space-between">
                        <IconButton
                            sx={{}}
                            edge='start'
                            aria-label='menu'
                            onClick={() => handleOpen()}
                        >
                            <Box sx={{display: {xl: 'none', xs: 'block'},}}>
                                <MenuBox
                                    variant='temporary'
                                    open={open}
                                    onClose={handleOpen}
                                />
                            </Box>
                            <MenuIcon sx={{color: '#fff',}}/>
                        </IconButton>

                        <Typography display="flex" gap="10px" variant='h6'>{children}</Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}