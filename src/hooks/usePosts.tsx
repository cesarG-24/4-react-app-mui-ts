import {useEffect, useState} from 'react'

import {IPost} from "../ui-kit/Types";


interface Options {
    readonly counter: number;
}

export const usePosts = ({counter}: Options): IPost[] => {
    const [posts, setPosts] = useState<IPost[]>([]);

    const getPosts = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/posts?limit=16&skip=${counter}`);
            const json = await res.json();

            setPosts(json.posts);
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getPosts();
    }, [counter])


    return posts;
}