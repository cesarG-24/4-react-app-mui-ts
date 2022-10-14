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
            p: 1,
            display: 'flex',
            fleDirection: 'row',
            alignItems: 'flexStart',
        }}>
            <Box>
                <CardMedia
                    component="img"
                    height="220"
                    image={users.image}
                    alt="green iguana"
                    sx={{
                        maxWidth: 50,
                        width: '100%',
                        maxHeight: 50,
                        height: '100%',
                        borderRadius: 16,
                        boxShadow: `0 5px 16px -3px ${theme.palette.primary.main}`,
                        overflow: 'hidden',
                    }}
                />
            </Box>
            <Box>
                <Typography mx={2} variant="subtitle2">{users.firstName} {users.lastName}</Typography>
                <PeopleAltIcon color="disabled" sx={{
                    mx: 2,
                    maxWidth: 20,
                    width: '100%',
                    maxHeight: 20,
                    height: '100%',
                    mt: -2,
                }}/>
            </Box>
        </Box>
    )
}
