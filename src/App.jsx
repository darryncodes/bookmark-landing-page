import './app.css';
import Container from './components/UI/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Tabs from './components/Tabs/Tabs';
import Cards from './components/Cards/Cards';

const App = () => {
    return (
        <Container>
            <Navigation />
            <Hero />
            <Tabs />
            <Cards />
        </Container>
    );
};

export default App;
