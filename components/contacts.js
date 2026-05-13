import { useRef, useState, useEffect } from "react";
import styles from "../styles/Contacts.module.css";

const contacts = [
    {
        label: "LinkedIn",
        value: "linkedin.com/in/joao-pedro-ospedal",
        href: "https://linkedin.com/in/joao-pedro-ospedal",
        icon: "/icons/linkedin.png",
    },
    {
        label: "GitHub",
        value: "github.com/JoaoOspedal",
        href: "https://github.com/JoaoOspedal",
        icon: "/icons/github.png",
    },
    {
        label: "Email",
        value: "jpospedal25@gmail.com",
        href: "mailto:jpospedal25@gmail.com",
        icon: "/icons/email.png",
    },
];

export default function Contact() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setVisible(entry.isIntersecting),
            { threshold: 0.15 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="contact" className={styles.section}>
            <h2 className={styles.heading}>Contact</h2>
            <p className={styles.subtitle}>Feel free to reach out through any of the channels below.</p>
            <div className={styles.list}>
                {contacts.map((contact, i) => (
                    <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.label !== "Email" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={`${styles.card} ${visible ? styles.cardVisible : ''}`}
                        style={{ transitionDelay: `${i * 180}ms` }}
                    >
                        <span className={styles.icon}>
                            <img src={contact.icon} alt={contact.label} />
                        </span>
                        <div className={styles.info}>
                            <span className={styles.label}>{contact.label}</span>
                            <span className={styles.value}>{contact.value}</span>
                        </div>
                        <span className={styles.arrow}>→</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
