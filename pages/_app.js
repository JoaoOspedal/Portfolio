import { Exo_2, Inter } from 'next/font/google';
import '../styles/globals.css';
import { useEffect } from 'react';

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
    useEffect(() => {
        window.googleTranslateInit = () => {
            new window.google.translate.TranslateElement(
                { pageLanguage: 'en', includedLanguages: 'en,pt', autoDisplay: false },
                'google_translate_element'
            );
        };

        const script = document.createElement('script');
        script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateInit';
        document.body.appendChild(script);
    }, []);

    return (
        <div className={`${exo2.variable} ${inter.variable}`}>
            <div id="google_translate_element" style={{ display: 'none' }} />
            <Component {...pageProps} />
        </div>
    );
}
