import { useState } from 'react';
import styles from './Button.module.css';
const Button = ({
    children,
    bg = 'hsl(231, 69%, 60%)',
    color = 'hsl(0, 0%, 100%)',
    border = 'none',
    textDecoration = 'none',
    textTransform = 'none',
    hoverBg,
    hoverColor,
    hoverOutline,
    padding,
    margin,
}) => {
    const [isHovered, setIsHovered] = useState(false);

    let btnStyle = {
        backgroundColor: isHovered ? hoverBg : bg,
        color: isHovered ? hoverColor : color,
        outline: isHovered ? hoverOutline : '',
        border,
        textDecoration,
        textTransform,
        padding,
        margin,
    };

    function mouseEnter() {
        setIsHovered(true);
    }
    function mouseLeave() {
        setIsHovered(false);
    }

    return (
        <a
            className={styles.btn}
            style={btnStyle}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
            href='#'
        >
            {children}
        </a>
    );
};

export default Button;
