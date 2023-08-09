import Author from "./Author";

class Post {
    constructor(
        public id: number,
        public author: Author,
        public publishedAt: Date,
        public content: string) {

    }
}

export default Post;