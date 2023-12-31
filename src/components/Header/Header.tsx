import styles from './Header.module.css';

import igniteLogo from '@/assets/ignite-logo.svg';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Feed"/>
            <h3>Godoy Feed</h3>
        </header>
    );
}

export default Header;