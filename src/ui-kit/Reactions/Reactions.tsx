import {Box, IconButton, ListItemIcon,Typography} from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import React, {useState} from "react";

import {IComments} from "../../ui-kit/Types";
import {useComments} from "../../hooks";


interface Options {
    readonly reactions: number,
    readonly postId: number;
}

export const Reactions = ({reactions,postId}: Options) => {
    const [likes, setLikes] = useState(reactions)
    const [unLikes, setUnLikes] = useState(0)

    const onLike = () => {
        setLikes((likes) => likes + 1);
    }
    const onUnLike = () => {
        setUnLikes((unLikes) => unLikes + 1);
    }

    let comments: IComments[];
    comments = useComments({postId});

     const filtered = comments.filter((comment) => {
return (comment.id)
    }).length


    return (
        <Box sx={{
            display: 'flex', flexDirection: 'row',
            alignItems: 'center'
        }}>
            <IconButton
                size={"large"}
                aria-label="likes"
                color='default'
                onClick={onLike}>
                <ThumbUpIcon/>
                <Typography variant='overline' sx={{ml: 0.5}}>{likes}</Typography>
            </IconButton>

            <IconButton
                size={"large"}
                aria-label="likes"
                color='default'
                onClick={onUnLike}>
                <ThumbDownIcon/>
                <Typography variant='overline' sx={{ml: 0.5}}>{unLikes}</Typography>
            </IconButton>

            <ListItemIcon sx={{
                alignItems: 'center'
            }}>
                <ChatBubbleIcon/>
                <Typography variant='overline' sx={{ml:0.5,}}>{filtered}</Typography>
            </ListItemIcon>


        </Box>
    )
}
