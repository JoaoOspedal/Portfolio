import Image from "next/image";
import styles from "../styles/Hero.module.css";

const languages = [
    { name: "PHP",        icon: "/icons/php.png",         width: 50 },
    { name: "Laravel",    icon: "/icons/laravel.png",     width: 47 },
    { name: "JavaScript", icon: "/icons/javascript.webp", width: 32 },
    { name: "Next.js",    icon: "/icons/nextjs.png",      width: 32 },
    { name: "Node.js",    icon: "/icons/nodejs.webp",     width: 32 },
    { name: "Python",     icon: "/icons/python.png",      width: 32 },
];

const databases = [
    { name: "MySQL",      icon: "/icons/mysql.png",      width: 32 },
    { name: "PostgreSQL", icon: "/icons/postgresql.png", width: 32 },
];

const devops = [
    { name: "Docker", icon: "/icons/docker.webp", width: 32 },
    { name: "GitHub Actions",    icon: "/icons/githubactions.png",    width: 32 },
];

const tools = [
    { name: "Git",  icon: "/icons/git.png",  width: 32 },
    { name: "WSL",  icon: "/icons/wsl.png",  width: 32 },
    { name: "SVN",    icon: "/icons/svn.png",    width: 32 },
    { name: "npm",    icon: "/icons/npm.png",    width: 32 },
    {name: "GitHub", icon: "/icons/github.png", width: 32 },
];

function TechIcon({ tech }) {
    return (
        <span className={styles.techIcon}>
            <Image src={tech.icon} alt={tech.name} width={tech.width} height={32} />
            {tech.name}
        </span>
    );
}

function Sector({ title, items }) {
    return (
        <div className={styles.sector}>
            <h3 className={styles.sectorTitle}>{title}</h3>
            <div className={styles.sectorIcons}>
                {items.map((tech) => (
                    <TechIcon key={tech.name} tech={tech} />
                ))}
            </div>
        </div>
    );
}

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <h1 className={styles.title}>Portfolio</h1>
            <h2 className={styles.subtitle}>João Pedro Ospedal</h2>
            <p className={styles.description}>
                I develop modern softwares with a focus on performance, scalability and maintainability. I have experience in both frontend and backend development, and I am always eager to learn new technologies and improve my skills.
            </p>

            <div className={styles.techStack}>
                <h2 className={styles.techTitle}>Technologies</h2>

                <div className={styles.sector}>
                    <h3 className={styles.sectorTitle}>Languages</h3>
                    <div className={styles.marquee}>
                        <div className={styles.marqueeTrack}>
                            {[...languages, ...languages].map((tech, i) => (
                                <TechIcon key={i} tech={tech} />
                            ))}
                        </div>
                    </div>
                </div>

                <Sector title="Databases" items={databases} />
                <Sector title="DevOps"    items={devops} />
                <Sector title="Tools"     items={tools} />
            </div>

            <div className={styles.ctas}>
                <a href="#projects" className={styles.button}>Projects</a>
                <a href="#contact"  className={styles.button}>Contact</a>
            </div>
        </section>
    );
}
