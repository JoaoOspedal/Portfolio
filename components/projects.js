import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../styles/Projects.module.css";

const projects = [
    {
        name: "UniBF – Institutional website and admin panel",
        partner: "Tuxon Soluções Web",
        description: "Maintenance and evolution of the UniBF institutional system. Bug fixes, adjustments to existing features, and MySQL database integration. Frontend adjustments with JavaScript, HTML and CSS.",
        techs: ["Laravel", "Orchid", "MySQL", "JavaScript", "PHP", "Git"],
        images: ["/prints/orchid.jpeg", "/prints/unibf2.png"],
        link: "https://www.unibf.com.br/",
    },
    {
        name: "Lumicenter – Institutional website and admin panel",
        partner: "Tuxon Soluções Web",
        description: "System maintenance with Laravel and Filament. Implementation of interface improvements with Tailwind CSS and MySQL database integration.",
        techs: ["Laravel", "Filament", "MySQL", "PHP", "SVN"],
        images: ["/prints/filament.jpeg", "/prints/lumicenter.png"],
        link: "https://lumicenter.com/",
    },
    {
        name: "Horsch – Admin panel",
        partner: "Tuxon Soluções Web",
        description: "Support and maintenance of an administrative system in Laravel with Orchid. Data manipulation and MySQL queries with SVN version control.",
        techs: ["Laravel", "Orchid", "MySQL", "SVN"],
        images: ["/prints/horsch.png"],
    },
];

function ProjectCard({ project }) {
    const [idx, setIdx] = useState(0);
    const [visible, setVisible] = useState(false);
    const ref = useRef(null);
    const { images } = project;
    const hasMultiple = images.length > 1;

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
    const next = () => setIdx((i) => (i + 1) % images.length);

    return (
        <div ref={ref} className={`${styles.card} ${visible ? styles.cardVisible : ''}`}>
            <div className={styles.imageWrapper}>
                <Image
                    src={images[idx]}
                    alt={`Screenshot ${idx + 1} of ${project.name}`}
                    fill
                    style={{ objectFit: "contain" }}
                />
                {hasMultiple && (
                    <>
                        <button className={styles.arrowLeft} onClick={prev}>&#8249;</button>
                        <button className={styles.arrowRight} onClick={next}>&#8250;</button>
                        <div className={styles.dots}>
                            {images.map((_, i) => (
                                <span
                                    key={i}
                                    className={`${styles.dot} ${i === idx ? styles.dotActive : ''}`}
                                    onClick={() => setIdx(i)}
                                />
                            ))}
                        </div>
                    </>
                )}
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
    );
}

export default function Projects() {
    return (
        <div className={styles.background}>
            <section id="projects" className={styles.section}>
                <h2 className={styles.heading}>Projects</h2>
                <div className={styles.grid}>
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </section>
        </div>
    );
}
