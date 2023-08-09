import styles from './PostItem.module.css'
import Comment from '../Comment/Comment.tsx';
import Avatar from '../Avatar/Avatar.tsx';
import Post from '../../models/Post.tsx';
import { formatDate, formatTimeDifference } from '../../helpers/DateHandler.tsx';

export interface PostItemProps {
    post: Post;
}

const PostItem = (props: PostItemProps) => {

    const post = props.post;
    const author = post.author;

    const formattedDate: string = formatDate(post.publishedAt);
    const timeDifference: string = formatTimeDifference(post.publishedAt);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar borderless={false} source={author.avatarUrl} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time
                    title={formattedDate}
                    dateTime={post.publishedAt.toISOString().split('T')[0]}
                >
                    {`Publicado há ${timeDifference}`}
                </time>
            </header>

            <div className={styles.content}>
                <p>{post.content}</p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    placeholder="Deixe um comentário"
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
            </div>
        </article>
    );
}

export default PostItem;