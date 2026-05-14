import styles from '../styles/Header.module.css';
import { useState, useEffect } from 'react';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [visible, setVisible] = useState(false);
    const [lang, setLang] = useState('en');

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 60);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = () => {
        const next = lang === 'en' ? 'pt' : 'en';
        const select = document.querySelector('.goog-te-combo');
        if (select) {
            select.value = next;
            select.dispatchEvent(new Event('change'));
            setLang(next);
        }
    };

    return (
        <>
            <header className={`${styles.header} ${visible ? styles.visible : ''}`}>
                <div className={styles.logo}>João Pedro Ospedal</div>
            </header>

            <button className={styles.menuButton} onClick={toggleLang}>
                {lang === 'en' ? 'PT' : 'EN'}
            </button>

            <div className={`${styles.navGroup} ${visible ? styles.visible : ''}`}>
                <nav className={`${styles.nav} ${menuAberto ? styles.navAberto : ''}`}>
                    <a href="#hero" onClick={() => setMenuAberto(false)}>Start</a>
                    <a href="#projects" onClick={() => setMenuAberto(false)}>Projects</a>
                    <a href="#contact" onClick={() => setMenuAberto(false)}>Contact</a>
                </nav>
            </div>
        </>
    );
}
