import Image from "next/image";
import styles from "../styles/Hero.module.css";

const techs = [
    { name: "PHP",        icon: "/icons/php.png",        width: 50 },
    { name: "Laravel",    icon: "/icons/laravel.png",    width: 47 },
    { name: "JavaScript", icon: "/icons/javascript.webp", width: 32 },
    { name: "Next.js",    icon: "/icons/nextjs.png",     width: 32 },
    { name: "Node.js",    icon: "/icons/nodejs.webp",    width: 32 },
    { name: "Python",     icon: "/icons/python.png",     width: 32 },
];

export default function Hero() {
    return <section id="hero" className={styles.hero}>
        <h1 className={styles.title}>Portfolio</h1>
        <h2 className={styles.subtitle}>João Pedro Ospedal</h2> 
        <p className={styles.description}>
            I develop modern softwares with a focus on performance, scalability and maintainability. I have experience in both frontend and backend development, and I am always eager to learn new technologies and improve my skills.
        </p>
        <div className={styles.techStack}>
            <h2 className={styles.techTitle}>Technologies</h2>
            <div className={styles.marquee}>
                <div className={styles.marqueeTrack}>
                    {[...techs, ...techs].map((tech, i) => (
                        <span key={i} className={styles.techIcon}>
                            <Image src={tech.icon} alt={tech.name} width={tech.width} height={32} />
                            {tech.name}
                        </span>
                    ))}
                </div>
            </div>
        </div>
        <div className={styles.ctas}>
            <a href="#projects" className={styles.button}>Projects</a>
            <a href="#contact" className={styles.button}>Contact</a>
        </div>
    </section>;
}
