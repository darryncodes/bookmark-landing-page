import Container from './components/UI/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Tabs from './components/Tabs/Tabs';
import Cards from './components/Cards/Cards';
import Faqs from './components/Faqs/Faqs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <>
            <Container>
                <Navigation />
                <Hero />
            </Container>
            <main>
                <Container>
                    <Tabs />
                    <Cards />
                    <Faqs />
                </Container>
                <Contact />
            </main>
            <Footer />
        </>
    );
};

export default App;
