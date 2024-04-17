import styles from './Navigation.module.css';
import logo from './../../assets/logo-bookmark.svg';
import logoWhite from './../../assets/logo-bookmark-white.svg';
import hamburger from './../../assets/icon-hamburger.svg';
import close from './../../assets/icon-close.svg';
import { useState } from 'react';

const navLinks = [
    {
        title: 'Features',
        path: '#',
    },
    {
        title: 'Pricing',
        path: '#',
    },
    {
        title: 'Contact',
        path: '#',
    },
];

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const showMenuClass = isOpen ? '' : styles.hidden;

    return (
        <nav>
            <div className={styles.nav}>
                <div>
                    <a href='/' className={styles.logo}>
                        <img src={logo} alt='Bookmark logo' />
                    </a>
                </div>
                <div className={styles.navList}>
                    {navLinks.map((nav, index) => (
                        <a
                            href={nav.path}
                            key={index}
                            className={styles.navLinks}
                        >
                            {nav.title}
                        </a>
                    ))}
                    <a href='#'>Login</a>
                </div>
                <button
                    id='menu-btn'
                    className={styles.menuBtn}
                    aria-label='Navigation menu'
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {isOpen ? (
                        <img src={close} alt='' />
                    ) : (
                        <img src={hamburger} alt='' />
                    )}
                </button>
            </div>
            <div className={`${styles.mobileNav} ${showMenuClass}`}>
                <div>
                    <a href='/'>
                        <img src={logoWhite} alt='Bookmark logo' />
                    </a>
                    <div className={styles.mobileList}>
                        {navLinks.map((nav, index) => (
                            <a href={nav.path} key={index} className=''>
                                {nav.title}
                            </a>
                        ))}
                        <a href='#'>Login</a>
                    </div>
                </div>
                <button
                    className={styles.mobileMenuBtn}
                    aria-label='Close navigation menu'
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    <img src={close} alt='' />
                </button>
            </div>
        </nav>
    );
};

export default Navigation;
