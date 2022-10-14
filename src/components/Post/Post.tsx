import {Box, Card, Typography} from "@mui/material";

import {Comments} from "../Comments";
import {User} from "../User";


interface Options {
    readonly userId: number;
    readonly post: any;
    readonly body: string;
    readonly title: string;
}


export const Post = ({body, title, userId, post, ...rest}: Options) => {

    return (

        <Card {...rest} sx={{
            maxWidth: 800,
            width: '100%',
            my: 3,
            display: 'flex',
            flexDirection: 'row',
        }}>
            <Box sx={{m: 2}}>
                <User userId={userId}/>
            </Box>

            <Box sx={{
                maxWidth: 600,
                width: '100%',
                my: 10,
                ml: -10,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flexStart',
                justifyContent: 'center'
            }}>
                <Box>
                    <Typography variant="h5" align='left'> {title}</Typography>
                    <Typography variant="subtitle1" align='justify' paragraph>{body}</Typography>
                </Box>
                <Box>
                    <h3>Comments</h3>
                    <Comments postId={post.id}/>
                </Box>
            </Box>

        </Card>
    )
}