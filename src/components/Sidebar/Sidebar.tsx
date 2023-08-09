import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import Avatar from '../Avatar/Avatar.tsx';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1649451844808-b81427e7a1f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40"
            />

            <div className={styles.profile}>
                <Avatar borderless={false} source="https://github.com/EnzoFNGodoy.png" />

                <strong>Enzo Godoy</strong>
                <span>Software Engineer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}

export default Sidebar;