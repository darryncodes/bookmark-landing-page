import Container from './../UI/Container/Container';
import styles from './Footer.module.css';
import logo from './../../assets/logo-bookmark-footer.svg';
import facebook from './../../assets/icon-facebook.svg';
import twitter from './../../assets/icon-twitter.svg';

const footerLinks = [
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

const socialLinks = [
    {
        logo: facebook,
        alt: 'Follow us on Facebook',
        path: '#',
    },
    {
        logo: twitter,
        alt: 'Follow us on Twitter',
        path: '#',
    },
];

const Footer = () => {
    return (
        <footer>
            <Container>
                <div className={styles.footer}>
                    <div className={styles.navigation}>
                        <img src={logo} alt='Bookmark logo' />
                        <ul className={styles.navlist}>
                            {footerLinks.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.path}
                                        className={styles.navlink}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <ul className={styles.social}>
                        {socialLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.path}>
                                    <img src={item.logo} alt={item.alt} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
