import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';
import Avatar from '../Avatar/Avatar';

const Comment = () => {
    return (
        <div className={styles.comment}>
            <Avatar borderless source="https://github.com/EnzoFNGodoy.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Enzo Godoy</strong>
                            <time title="08 de Agosto de 2023 às 21:21h" dateTime="2023-08-08 21:21:41">
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title="Excluir comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Muito bom Enzo, parabéns!! 👏👏
                    </p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp /> Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}

export default Comment;