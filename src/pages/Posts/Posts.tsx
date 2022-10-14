import React, {HTMLAttributes, useState} from "react";
import {alpha, AppBar, Box, Toolbar, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';

import {theme} from "../../ui-kit/Theme";
import {HandlePosts} from "../../components/HandlePosts";

interface Properties extends HTMLAttributes<HTMLDivElement> {
    readonly search?: string,
}

export default function Posts({...rest}: Properties) {
    const [search, setSearch] = useState('')

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    const cleanSearch = () => setSearch('')

    return (
        <Box {...rest} >
            <AppBar position='fixed' sx={{
                display: 'flex',
                mt: 6,
            }}>
                <Typography variant='h6' sx={{ml: 5,}}> Posts </Typography>
                <Toolbar sx={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    mt: -4,
                }}>


                    <Box sx={{
                        position: 'relative',
                        '&:hover': {
                            borderRadius: theme.shape.borderRadius,
                            width: '75%',
                        },
                        width: '70%'
                    }}>


                        <Box sx={{
                            borderRadius: theme.shape.borderRadius,
                            position: 'relative',
                            backgroundColor: alpha(theme.palette.common.white, 0.15),
                            width: '100%',
                            [theme.breakpoints.up('sm')]: {
                                marginLeft: theme.spacing(1),
                            },
                        }}>
                            <Box sx={{
                                height: '100%',
                                position: 'absolute',
                                pointerEvents: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                marginLeft: 2,
                            }}>
                                <SearchIcon/>
                            </Box>

                            <InputBase
                                placeholder="Search…"
                                inputProps={{'aria-label': 'search'}}
                                value={search}
                                onChange={handleSearch}
                                onBlur={cleanSearch}
                                sx={{
                                    width: '100%',
                                    color: 'inherit',
                                    '& .MuiInputBase-input': {
                                        padding: theme.spacing(1, 1, 1, 0),
                                        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                                        transition: theme.transitions.create('width'),
                                        width: '80%',

                                        [theme.breakpoints.up('sm')]: {
                                            width: '12ch',
                                            '&:focus': {
                                                width: '20ch',
                                            },
                                        },
                                    },
                                }}
                            />

                        </Box>

                    </Box>
                </Toolbar>
            </AppBar>

            <HandlePosts search={search}/>

        </Box>
    )
}
