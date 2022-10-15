import {HTMLAttributes, useState} from "react";
import {Box} from "@mui/material";

import {PagBtn} from "../../ui-kit/Buttons";
import {usePosts} from "../../hooks";
import {Post} from "../Post";
import {IPost} from "../../ui-kit/Types";


interface Properties extends HTMLAttributes<HTMLDivElement> {
    readonly search: string,
}


export const HandlePosts = ({search}: Properties) => {
    const [counter, setCounter] = useState<number>(0)

    const posts = usePosts({counter});

    const nextPage = () => {
        if (counter >= 9) return;
        setCounter((counter) => counter + 1);
    }
    const prevPage = () => {
        if (counter <= 0) return;
        setCounter((counter) => counter - 1);
    }


    const handleFilter = posts.filter(
        (post: IPost) => post.title.toLowerCase().includes(search.toLowerCase())
            || post.body.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 15,
            boxSizing:'contentBox'
        }}>
            <PagBtn
                counter={counter}
                prevPage={prevPage}
                nextPage={nextPage}/>

            <h1>handle posts</h1>

            {handleFilter?.map(
                (post: IPost) => <Post key={post.id}
                                       post={post}
                                       userId={post.id} title={post.title}
                                       body={post.body}/>)}

            <PagBtn
                counter={counter}
                prevPage={prevPage}
                nextPage={nextPage}/>
        </Box>
    )
}