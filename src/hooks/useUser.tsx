import {useEffect, useState} from 'react'


interface Options {
    readonly userId: number,
}


export const useUser = ({userId}: Options) => {
    const [users, setUsers] = useState({id: 0, image: '', firstName: '', lastName: '',});

    const getUser = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/users/${userId}`);
            const json = await res.json();

            setUsers(json);
        } catch (error) {
            console.error(error)
            setUsers({id: 0, image: '', firstName: '', lastName: '',})
        }
    }

    useEffect(() => {
        getUser();
    }, [userId])

    return users
}