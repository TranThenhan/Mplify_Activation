import classNames from 'classnames/bind';
import images from '~/assests/images';
import styles from './AuthLayout.module.scss';

const cx = classNames.bind(styles);

function AuthLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {children}
                <div className={cx('image')}>
                    <img srcSet={`${images.auth} 2x`} alt="auth" />
                </div>
            </div>
        </div>
    );
}

export default AuthLayout;
