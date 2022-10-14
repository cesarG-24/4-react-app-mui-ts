import {HTMLAttributes} from "react";
import {Box, Typography} from "@mui/material";

import {useComments} from '../../hooks'
import {IComments} from "../../ui-kit/Types";


interface Props extends HTMLAttributes<HTMLDivElement> {
    readonly postId: number;
}


export const Comments = ({postId, ...rest}: Props) => {

    let comments: IComments[];
    comments = useComments({postId});

    return (
        <Box {...rest}>
            {comments?.map((comment: IComments) =>
                <Box key={comment.id}
                     sx={{
                         display: 'flex',
                         flexDirection: 'row',
                         p: 1,
                         m: 1,
                         borderRadius: 1,
                         alignItems: 'center',
                     }}>
                    <Box sx={{
                        maxWidth: 100,
                        width: '100%',
                        maxHeight: 40,
                        height: '100%',
                        borderRadius: 16,
                        boxShadow: '0 8px 16px 0 #BDC9D7',
                        overflow: 'hidden',
                        textAlign: 'center',
                        mx: 3,
                        my: 1,
                        backgroundColor: '#b39ddb',
                        p: 1,
                    }}>
                        <Typography variant='subtitle2'>{comment.user.username}</Typography>
                    </Box>

                    <Box sx={{
                        maxWidth: 300,
                        width: '100%',
                        maxHeight: '100%',
                        borderRadius: 16,
                        boxShadow: '0 8px 16px 0 #BDC9D7',
                        wordWrap: 'break-word',
                        textAlign: 'center',
                        backgroundColor: '#d1c4e9',
                        p: 2,
                    }}>
                        <Typography variant='subtitle1'>{comment.body}</Typography>
                    </Box>
                </Box>)}
        </Box>
    )
}
