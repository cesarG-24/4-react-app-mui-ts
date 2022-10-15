import {HTMLAttributes} from "react";
import {Box, Card, Typography} from "@mui/material";

import {useComments} from '../../hooks'
import {IComments} from "../../ui-kit/Types";


interface Props extends HTMLAttributes<HTMLDivElement> {
    readonly postId: number;
}


export const Comments = ({postId, ...rest}: Props) => {

    let comments: IComments[];
    comments = useComments({postId});

    return (
        <Card {...rest} sx={{
            maxWidth: "100%",
            m: 2,
            ml: {xs: -9, sm: -4},
        }}>
            <Typography align='left' sx={{m: 2, typography: {xs: 'body', sm: 'h6'}}}> Comments</Typography>
            {comments?.map((comment: IComments) =>
                <Box key={comment.id}
                     sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         m: 2,
                         alignItems: 'left',
                     }}>
                    <Typography variant='subtitle2'>{comment.user.username}</Typography>
                    <Typography variant='subtitle1'
                                sx={{
                                    maxWidth: 300,
                                    width: '100%',
                                    wordWrap: 'break-word',
                                    textAlign: 'left',
                                    typography: {xs: 'body2', sm: 'body1',}
                                }}>{comment.body}</Typography>
                </Box>)}
        </Card>
    )
}
