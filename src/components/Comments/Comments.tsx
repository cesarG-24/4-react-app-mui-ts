import {Box, Card, Typography} from "@mui/material";

import {useComments} from '../../hooks'
import {IComments} from "../../ui-kit/Types";


interface Props  {
    readonly postId: number;
}


export const Comments = ({postId, ...rest}: Props) => {

    let comments: IComments[];
    comments = useComments({postId});

    return (
        <Card {...rest} sx={{
            maxWidth: "100%",
            width: {xs: '92%', sm: '100%'},
            mx: {xs: 2, sm: 0},
            my: 1,
        }}>
            <Typography align='left' sx={{mx: 2, mt: 1, typography: {xs: 'h6', m: 'h6'}}}> Comments</Typography>

            {comments?.map((comment: IComments, length) =>

                <Box key={comment.id}
                     sx={{
                         display: 'flex',
                         flexDirection: 'column',
                         mx: 2,
                         mb: 1,
                         alignItems: 'left',
                     }}>

                    <Typography variant='subtitle2' color='default'>{comment.user.username}</Typography>
                    <Typography variant='body2' color='default'
                                sx={{
                                    maxWidth: 300,
                                    width: {xs: '50%', sm: '100%'},
                                    wordWrap: 'break-word',
                                    textAlign: 'left',
                                    typography: {xs: 'body2', sm: 'body1',}
                                }}>{comment.body}</Typography>
                </Box>
            )}

        </Card>
    )
}
