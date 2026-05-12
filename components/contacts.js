import styles from "../styles/Contacts.module.css";

const contacts = [
    {
        label: "LinkedIn",
        value: "linkedin.com/in/joao-pedro-ospedal",
        href: "https://linkedin.com/in/joao-pedro-ospedal",
        icon: "in",
    },
    {
        label: "GitHub",
        value: "github.com/JoaoOspedal",
        href: "https://github.com/JoaoOspedal",
        icon: "gh",
    },
    {
        label: "Email",
        value: "jpospedal25@gmail.com",
        href: "mailto:jpospedal25@gmail.com",
        icon: "@",
    },
];

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <h2 className={styles.heading}>Contact</h2>
            <p className={styles.subtitle}>Feel free to reach out through any of the channels below.</p>
            <div className={styles.list}>
                {contacts.map((contact) => (
                    <a
                        key={contact.label}
                        href={contact.href}
                        target={contact.label !== "Email" ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className={styles.card}
                    >
                        <span className={styles.icon}>{contact.icon}</span>
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
