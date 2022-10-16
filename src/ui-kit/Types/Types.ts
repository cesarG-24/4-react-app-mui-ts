export type IPost = {
    title: string,
    body: string,
    post: any,
    id: number,
    postId: number,
    reactions: number,
}

export type IUser = {
    id: number,
    username: string,
}

export type ICom = {
    length: number,
    index: number,
}
export type IComments = {
    id: number,
    body: string,
    user: IUser,
    length:any,
    index: any
}

