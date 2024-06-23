export type Post = {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    title: string;
    content: string;
    published: boolean;
    author: User;
    authorId: number;
}

export type Profile = {
    id: number;
    bio: string;
    user: User;
    userId: number
}

export type User = {
    id: number;
    email: string;
    name?: String;
    posts: Post[];
    Profile?: Profile
}
  
