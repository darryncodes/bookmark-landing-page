import { useState } from 'react';
import Centralised from './../UI/Centralised/Centralised';
import Container from './../UI/Container/Container';
import styles from './Contact.module.css';
import errorIcon from './../../assets/icon-error.svg';

const Contact = () => {
    const [input, setInput] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(false);

    function handleInput(e) {
        if (input.length) {
            setMessage('');
            setError(false);
        }

        setInput(e.target.value);
    }

    function validateEmail(email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        return reg.test(email);
    }

    function handleSubmit(e) {
        e.preventDefault();

        if (input.trim().length === 0) {
            setMessage(`Don't forget to enter an email`);
            setError(true);
            return;
        }

        if (validateEmail(input) === false) {
            setMessage(`Whoops, make sure it's an email`);
            setError(true);
            return;
        }

        setInput('');
    }

    return (
        <section className={styles.contact}>
            <Container>
                <Centralised>
                    <p className={styles.content}>35,000+ already joined</p>
                    <h2 className={styles.heading}>
                        Stay up-to-date with what we’re doing
                    </h2>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.group}>
                            <label htmlFor='email'></label>
                            <input
                                type='text'
                                id='email'
                                placeholder='Enter your email address'
                                value={input.toLowerCase()}
                                onChange={handleInput}
                                className={`${styles.input} ${
                                    error ? styles.error : null
                                }`}
                            />

                            {error && (
                                <img src={errorIcon} className={styles.icon} />
                            )}
                            {message && (
                                <span className={styles.message}>
                                    {message}
                                </span>
                            )}
                        </div>
                        <button type='submit' className={styles.button}>
                            Contact us
                        </button>
                    </form>
                </Centralised>
            </Container>
        </section>
    );
};

export default Contact;
