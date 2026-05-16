import Image from "next/image";
import styles from "../styles/Projects.module.css";

const projects = [
    {
        name: "UniBF – Site institucional e painel administrativo",
        partner: "Tuxon Soluções Web",
        description: "Manutenção e evolução do sistema institucional da UniBF. Correção de bugs, ajustes em funcionalidades existentes e integração com banco de dados MySQL. Ajustes no frontend com JavaScript, HTML e CSS.",
        techs: ["Laravel", "Orchid", "MySQL", "JavaScript", "Git", "SVN"],
        image: "/prints/unibf.jpeg",
        link: "https://www.unibf.com.br/",
    },
    {
        name: "Lumicenter – Site institucional e painel administrativo",
        partner: "Tuxon Soluções Web",
        description: "Manutenção do sistema com Laravel e Filament. Implementação de melhorias de interface com Tailwind CSS e integração com banco de dados MySQL.",
        techs: ["Laravel", "Filament", "Tailwind CSS", "MySQL", "Git"],
        image: "/prints/lumicenter.jpeg",
        link: "https://lumicenter.com/",
    },
    {
        name: "Horsch – Painel administrativo",
        partner: "Tuxon Soluções Web",
        description: "Suporte e manutenção de sistema administrativo em Laravel com Orchid. Manipulação de dados e consultas em MySQL, com versionamento via SVN.",
        techs: ["Laravel", "Orchid", "MySQL", "SVN"],
        image: "/prints/horsch.jpeg",
    },
    {
        name: "Schulz – Site institucional e painel administrativo",
        partner: "Tuxon Soluções Web",
        description: "Manutenção do sistema com Laravel e Filament. Ajustes de layout e responsividade com Tailwind CSS.",
        techs: ["Laravel", "Filament", "Tailwind CSS", "Git"],
        image: "/prints/schulz.jpeg",
        link: "https://www.schulz.com.br",
    },
    {
        name: "Start Química – Site institucional e painel administrativo",
        partner: "Tuxon Soluções Web",
        description: "Manutenção e atualização de sistema em Laravel com Filament. Ajustes de interface com HTML, CSS e Tailwind.",
        techs: ["Laravel", "Filament", "Tailwind CSS", "HTML", "CSS", "SVN"],
        image: "/prints/startquimica.jpeg",
        link: "https://www.startquimica.com.br",
    },
    {
        name: "Portal Subway – Painel administrativo",
        partner: "Tuxon Soluções Web",
        description: "Manutenção e atualização de sistema de criação de artes e banners em Laravel. Manipulação de dados em MySQL e ajustes de interface com HTML, CSS e Tailwind.",
        techs: ["Laravel", "MySQL", "Tailwind CSS", "HTML", "CSS", "SVN"],
        image: "/prints/subway.jpeg",
    },
];

export default function Projects() {
    return (
        <div className={styles.background}>
            <section id="projects" className={styles.section}>
                <div className={styles.background}></div>
                <h2 className={styles.heading}>Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <div key={project.name} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={`Screenshot de ${project.name}`}
                                    fill
                                    style={{ objectFit: "contain" }}
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
        </div>
    );
}
