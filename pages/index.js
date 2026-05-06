import Header from '../components/header';
import Hero from '../components/hero';
import Projects from '../components/projects';
import Contact from '../components/contacts';

export default function Home() {
    return (
        <main>
            <Header/>
            <Hero/>
            <Projects/>
            <Contact/>
        </main>
    );
}