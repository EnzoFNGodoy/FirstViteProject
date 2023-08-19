import Author from "./Author";
import PostContent from "./PostContent";

class Post {
    constructor(
        public id: number,
        public author: Author,
        public publishedAt: Date,
        public content: PostContent[]) {

    }
}

export default Post;