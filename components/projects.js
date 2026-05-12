import Image from "next/image";
import styles from "../styles/Projects.module.css";

const projects = [
    {
        name: "Painel Administration - Orchid",
        partner: "Parceria com Tuxon Soluções Web",
        description: "Descreva aqui o que esse projeto faz, qual problema ele resolve e quais foram os principais desafios.",
        techs: ["Laravel", "PHP", "MySQL", "Orchid"],
        image: "/prints/orchid.jpeg",
    },
    {
        name: "Painel Administration - Filament",
        partner: "Parceria com Tuxon Soluções Web",
        description: "Descreva aqui o que esse projeto faz, qual problema ele resolve e quais foram os principais desafios.",
        techs: ["Laravel", "PHP", "MySQL", "Filament"],
        image: "/prints/filament.jpeg",
    },
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <h2 className={styles.heading}>Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <div key={project.name} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={project.image}
                                alt={`Screenshot de ${project.name}`}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div className={styles.body}>
                            <h3 className={styles.name}>{project.name}</h3>
                            <p className={styles.partner}>{project.partner}</p>
                            <p className={styles.description}>{project.description}</p>
                            <div className={styles.techs}>
                                {project.techs.map((tech) => (
                                    <span key={tech} className={styles.tech}>{tech}</span>
                                ))}
                            </div>
                            {project.link && (
                                <div className={styles.links}>
                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.link}>Visit</a>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
