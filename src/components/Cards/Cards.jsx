import { cardInfo } from './cardinfo';
import Button from './../Button/Button';
import styles from './Cards.module.css';
import Centralised from './../UI/Centralised/Centralised';
import dots from './../../assets/bg-dots.svg';

const Cards = () => {
    return (
        <section>
            <Centralised>
                <h2>Download the extension</h2>
                <p>
                    We’ve got more browsers in the pipeline. Please do let us
                    know if you’ve got a favourite you’d like us to prioritize.
                </p>
            </Centralised>
            <div className={styles.cards}>
                {cardInfo.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div>
                            <img
                                src={item.img}
                                className={styles.image}
                                alt=''
                            />
                            <h3>{item.heading}</h3>
                            <p>{item.content}</p>
                        </div>
                        <div className={styles.cta}>
                            <img src={dots} alt='' />
                            <Button>{item.button}</Button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cards;
