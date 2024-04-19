import Grid from '../UI/Grid/Grid';
import Button from './../Button/Button';
import img from './../../assets/illustration-hero.svg';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <header>
            <Grid>
                <div className={styles.message}>
                    <div>
                        <h1>A Simple Bookmark Manager</h1>
                        <p>
                            A clean and simple interface to organize your
                            favourite websites. Open a new browser tab and see
                            your sites load instantly. Try it for free.
                        </p>
                    </div>
                    <div>
                        <div className={styles.buttons}>
                            <Button
                                hoverBg='transparent'
                                hoverColor='hsl(231, 69%, 60%)'
                                hoverOutline='2px solid hsl(231, 69%, 60%)'
                            >
                                Get it on Chrome
                            </Button>
                            <Button
                                bg='hsl(0, 0%, 95%)'
                                color='rgb(37, 43, 70)'
                                hoverBg='transparent'
                                hoverColor='rgb(37, 43, 70)'
                                hoverOutline='2px solid rgb(37, 43, 70)'
                            >
                                Get it on Firefox
                            </Button>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={img} alt='' />
                </div>
            </Grid>
        </header>
    );
};

export default Hero;
