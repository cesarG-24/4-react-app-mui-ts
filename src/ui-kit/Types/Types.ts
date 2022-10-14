export type IPost = {
    title: string,
    body: string,
    post: any,
    id: number,
    postId: number,
}

export type IUser = {
    id: number,
    username: string,
}

export type IComments = {
    id: number,
    body: string,
    user: IUser
}

