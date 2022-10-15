import {HTMLAttributes} from "react";
import {Box, CardMedia, Typography} from "@mui/material";
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

import {useUser} from '../../hooks';
import {theme} from "../../ui-kit/Theme";

interface Props extends HTMLAttributes<HTMLDivElement> {
    readonly userId: number,
}


export const User = ({userId, ...rest}: Props) => {

    const users = useUser({userId});

    return (
        <Box {...rest} key={users.id} sx={{
            m: 3,
            display: 'flex',
            fleDirection: 'row',
            alignItems: 'flexStart',
        }}>
                <CardMedia
                    component="img"
                    image={users.image}
                    alt="green iguana"
                    sx={{
                        maxWidth: 45,
                        width: '100%',
                        maxHeight: 45,
                        height: '100%',
                        borderRadius: 16,
                        boxShadow: `0 5px 16px -3px ${theme.palette.primary.main}`,
                        overflow: 'hidden',
                    }}
                />
            <Box>
                <Typography mx={2} variant="subtitle2">{users.firstName} {users.lastName}</Typography>
                <PeopleAltIcon color="disabled" sx={{
                    mx: 2,
                    maxWidth: 20,
                    width: '100%',
                    maxHeight: 20,
                    height: '100%',
                }}/>
            </Box>
        </Box>
    )
}
