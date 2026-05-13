import { Exo_2, Inter } from 'next/font/google';
import '../styles/globals.css';

const exo2 = Exo_2({
    subsets: ['latin'],
    variable: '--font-exo2',
    weight: ['400', '600', '700'],
});

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export default function App({ Component, pageProps }) {
    return (
        <div className={`${exo2.variable} ${inter.variable}`}>
            <Component {...pageProps} />
        </div>
    );
}
