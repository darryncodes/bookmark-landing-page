import './app.css';
import Container from './components/UI/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import Tabs from './components/Tabs/Tabs';

const App = () => {
    return (
        <Container>
            <Navigation />
            <Hero />
            <Features />
            <Tabs />
        </Container>
    );
};

export default App;
