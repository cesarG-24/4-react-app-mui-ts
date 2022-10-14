import React, {MouseEventHandler} from 'react'
import {Box, IconButton} from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

interface Properties {
    readonly counter?: number,
    readonly prevPage?: MouseEventHandler<HTMLButtonElement>,
    readonly nextPage?: MouseEventHandler<HTMLButtonElement>,
}

export const PagBtn = ({nextPage, prevPage, counter}: Properties) => {


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            position: 'sticky'
        }}>
            <IconButton
                size={"large"}
                aria-label="next"
                color='secondary'
                onClick={prevPage}>
                <ArrowCircleLeftIcon sx={{
                    boxShadow: 1, borderRadius: 5,
                }}/>
            </IconButton>

            <span>{counter}</span>

            <IconButton
                size={'large'}
                aria-label="next"
                color='secondary'
                onClick={nextPage}>
                <ArrowCircleRightIcon sx={{
                    boxShadow: 1, borderRadius: 5,
                }}/>
            </IconButton>
        </Box>
    )
}