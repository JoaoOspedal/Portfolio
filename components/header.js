import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`${styles.header} ${visible ? styles.visible : ''}`}>
            <div className={styles.logo}>João Pedro Ospedal</div>

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
