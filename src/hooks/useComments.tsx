import {useEffect, useState} from 'react'

import {IComments} from "../ui-kit/Types";


interface Options {
    readonly postId: number;
}

export const useComments = ({postId}: Options): IComments[] => {
    const [comments, setComments] = useState<IComments[]>([]);

    const getComments = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`);
            const json = await res.json();

            setComments(json.comments);
        } catch (error) {
            setComments([])
        }
    }

    useEffect(() => {
        getComments();
    }, [])

    return comments
}