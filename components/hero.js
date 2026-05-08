import styles from "../styles/Hero.module.css";

export default function Hero() {
    return <section className={styles.hero}>
        <h1 className={styles.title}>João Pedro Ospedal</h1>
        <p className={styles.description}>
            I develop modern softwares with a focus on performance, scalability and maintainability. I have experience in both frontend and backend development, and I am always eager to learn new technologies and improve my skills.
        </p>
        <div className={styles.techStack}>
            <h2 className={styles.techTitle}>Technologies</h2>
            <div className={styles.techIcons}>
                <span className={styles.techIcon}>PHP</span>
                <span className={styles.techIcon}>Laravel</span>
                <span className={styles.techIcon}>Laravel</span>
                <span className={styles.techIcon}>Node.js</span>
                <span className={styles.techIcon}>Python</span>
            </div>
        </div>
        <div className={styles.ctas}>
            <button className={styles.button}>Contact</button>
            <button className={styles.button}>Projects</button>
        </div>
    </section>;
}