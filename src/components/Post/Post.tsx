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
            maxWidth: 600,
            width: '100%',
            maxHeight: 'fitContent',
            height:'100%',
            my: 2,
            display: 'flex',
            flexDirection: 'row',
        }}>
            <User userId={userId}/>
            <Box sx={{
                maxWidth: 500,
                width: '100%',
                my: 10,
                ml: -8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flexStart',
                justifyContent: 'center'
            }}>

                <Typography variant="h6" align='left' sx={{
                    my: 2,
                    ml: {xs: -3, sm: -4,},
                    typography: {xs: 'subtitle2',}
                }}>
                    {title}
                </Typography>
                <Typography variant="subtitle2" align='justify' paragraph
                            sx={{
                                ml: {xs: -3, sm: -4,},
                                width: '100%',
                                wordWrap: 'break-word',
                                textAlign: 'left',
                                typography: {xs: 'body2',}
                            }}>
                    {body}
                </Typography>
                <Comments postId={post.id}/>

            </Box>
        </Card>
    )
}