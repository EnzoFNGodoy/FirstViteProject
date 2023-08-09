import styles from './Avatar.module.css';

export interface AvatarProps {
    source: string;
    borderless: boolean;
}

const Avatar = (props: AvatarProps) => {

    return (
        <img
            className={props.borderless ? styles.avatarBorderless : styles.avatar}
            src={props.source}
        />
    );
}

export default Avatar;