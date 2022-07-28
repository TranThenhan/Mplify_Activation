import classNames from 'classnames/bind';
import styles from './Input.module.scss';

const cx = classNames.bind(styles);

function Input({ title, className, leftIcon, rightIcon, errorMessage = '', ...props }) {
    const errorOutline = 'error-outline';

    return (
        <div className={cx('wrapper', { [className]: className })}>
            <span className={cx('title')}>{title}</span>
            <div className={cx('input-wrapper', { [errorOutline]: errorMessage })}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <input {...props} />
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </div>
            {errorMessage && <span className={cx('error')}>{errorMessage}</span>}
        </div>
    );
}

export default Input;
