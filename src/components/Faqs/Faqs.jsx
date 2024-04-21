import { useState } from 'react';
import { faqsInfo } from './faqsInfo.js';
import Centralised from './../UI/Centralised/Centralised';
import Button from './../Button/Button';
import styles from './Faqs.module.css';
import arrow from './../../assets/icon-arrow.svg';

const Faqs = () => {
    const [isActive, setIsActive] = useState(null);

    const handleClick = (index) => {
        setIsActive((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <section>
            <Centralised>
                <h2>Frequently Asked Questions</h2>
                <p>
                    Here are some of our FAQs. If you have any other questions
                    you’d like answered please feel free to email us.
                </p>
            </Centralised>
            <ul className={styles.accordion}>
                {faqsInfo.map((faq, index) => (
                    <li key={index}>
                        <button
                            className={styles.btn}
                            aria-expanded={
                                isActive === index ? 'true' : 'false'
                            }
                            aria-controls={`faq-${index + 1}`}
                            type='button'
                            onClick={() => handleClick(index)}
                        >
                            {faq.question}
                            <img
                                src={arrow}
                                className={`${styles.arrow} ${
                                    isActive === index ? styles.active : ''
                                }`}
                                alt=''
                            />
                        </button>
                        {isActive === index && (
                            <div
                                className={styles.answer}
                                aria-hidden={
                                    isActive === index ? 'false' : 'true'
                                }
                                id={`faq-${index + 1}`}
                            >
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
            <Centralised>
                <Button margin={'2rem 0 0 0'}>More info</Button>
            </Centralised>
        </section>
    );
};

export default Faqs;
