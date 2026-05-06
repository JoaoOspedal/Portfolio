import styles from '../styles/Header.module.css';
import { useState } from 'react';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={styles.header}>
            <div className={styles.logo}>João Pedro</div>

            <nav className={`${styles.nav} ${menuAberto ? styles.navAberto : ''}`}>
                <a href="#hero" onClick={() => setMenuAberto(false)}>Início</a>
                <a href="#projects" onClick={() => setMenuAberto(false)}>Projetos</a>
                <a href="#contact" onClick={() => setMenuAberto(false)}>Contato</a>
            </nav>

            <button className={styles.hamburguer}  
                onClick={() => setMenuAberto(!menuAberto)}
                aria-label="Menu">
                <span />
                <span />
                <span />
            </button>
        </header>
    );
}