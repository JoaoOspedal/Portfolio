import Image from "next/image";
import styles from "../styles/Hero.module.css";

const techs = [
    { name: "PHP",        icon: "/icons/php.png" },
    { name: "Laravel",    icon: "/icons/laravel.png" },
    { name: "JavaScript", icon: "/icons/javascript.webp" },
    { name: "Next.js",    icon: "/icons/nextjs.png" },
    { name: "Node.js",    icon: "/icons/nodejs.webp" },
    { name: "Python",     icon: "/icons/python.png" },
];

export default function Hero() {
    return <section className={styles.hero}>
        <h1 className={styles.title}>João Pedro Ospedal</h1>
        <p className={styles.description}>
            I develop modern softwares with a focus on performance, scalability and maintainability. I have experience in both frontend and backend development, and I am always eager to learn new technologies and improve my skills.
        </p>
        <div className={styles.techStack}>
            <h2 className={styles.techTitle}>Technologies</h2>
            <div className={styles.techIcons}>
                {techs.map((tech) => (
                    <span key={tech.name} className={styles.techIcon}>
                        <Image src={tech.icon} alt={tech.name} width={32} height={32} />
                        {tech.name}
                    </span>
                ))}
            </div>
        </div>
        <div className={styles.ctas}>
            <button className={styles.button}>Contact</button>
        </div>
    </section>;
}
