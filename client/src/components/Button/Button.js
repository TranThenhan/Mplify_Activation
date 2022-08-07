import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Button({
    primary,
    secondary,
    secondaryError,
    tertiary,
    className,
    to,
    href,
    children,
    leftIcon,
    rightIcon,
    onClick,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        Comp = NavLink;
        props.to = to;
    } else if (href) {
        Comp = 'a';
        props.href = href;
    }
    const classes = cx('wrapper', {
        primary,
        secondary,
        secondaryError,
        tertiary,
        [className]: className
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            {children && <span className={cx('title')}>{children}</span>}
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;
