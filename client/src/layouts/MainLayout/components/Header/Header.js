import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assests/images';
import { BarsIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('title')}>Danh sách chiến dịch</div>
                <img className={cx('logo')} srcSet={`${images.logoMobile} 2x`} alt="logo" />
                <div className={cx('user')}>
                    <img srcSet={`${images.avtHeader} 2x`} alt="avatar" />
                    <div className={cx('info')}>
                        <span className={cx('name')}>Nguyễn Hạnh My</span>
                        <span className={cx('role')}>Supervisor</span>
                    </div>
                </div>
                <span className={cx('menu-btn')}>
                    <BarsIcon/>
                </span>
            </div>
        </header>
    );
}

export default Header;
