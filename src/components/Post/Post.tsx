import {Box, Card, Divider, Typography} from "@mui/material";

import {Comments} from "../Comments";
import {User} from "../User";
import {Reactions} from "../../ui-kit/Reactions";


interface Options {
    readonly userId: number;
    readonly post: any;
    readonly body: string;
    readonly title: string;
    readonly reactions: number;
}


export const Post = ({userId, title, body, post, reactions, ...rest}: Options) => {

    return (

        <Card {...rest} sx={{
            maxWidth: 535,
            width: '100%',
            maxHeight: 'fitContent',
            height: '100%',
            my: 2,
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'center',
            alignItems: 'flexStart',

        }}>
            <User userId={userId}/>
            <Box sx={{
                maxWidth: 500,
                width: '100%',
                my: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flexStart',
                justifyContent: 'center'
            }}>

                <Typography variant="h6" align='left' sx={{
                    my: 2,
                    mx: {xs: 2, sm: 0},
                }}>
                    {title}
                </Typography>
                <Typography color="default" variant="subtitle2" align='justify' paragraph
                            sx={{

                                mx: {xs: 2, sm: 0},
                                width: {xs: '92%', sm: '100%'},
                                wordWrap: 'break-word',
                                textAlign: 'left',
                                typography: {xs: 'body2',}
                            }}>
                    {body}
                </Typography>
                <Divider/>
                <Reactions reactions={post.reactions}
                           postId={post.id}/>
                <Comments postId={post.id}/>

            </Box>
        </Card>
    )
}