import { Exo_2, Shippori_Mincho } from 'next/font/google';
import '../styles/globals.css';
import { useEffect } from 'react';

const exo2 = Exo_2({
    subsets: ['latin'],
    variable: '--font-exo2',
    weight: ['400', '600', '700'],
});

const shippori = Shippori_Mincho({
    subsets: ['latin'],
    variable: '--font-shippori',
    weight: ['400', '600', '700', '800'],
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
        <div className={`${exo2.variable} ${shippori.variable}`}>
            <div id="google_translate_element" style={{ display: 'none' }} />
            <Component {...pageProps} />
        </div>
    );
}
