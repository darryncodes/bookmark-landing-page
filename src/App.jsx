import './app.css';
import Container from './components/UI/Container/Container';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';

const App = () => {
    return (
        <Container>
            <Navigation />
            <Hero />
        </Container>
    );
};

export default App;
