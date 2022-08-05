import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import images from '~/assests/images';
import { ChevronRightIcon, EditIcon, GlobeIcon, LockIcon, MailIcon, MappinIcon } from '~/components/Icon';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('user')}>
                <img srcSet={`${images.avtDefaultMobile} 2x`} alt="avatar" />
                <div className={cx('info')}>
                    <div className={cx('name-block')}>
                        <span className={cx('name')}>Nguyễn Hạnh My</span>
                        <Button
                            className={cx('edit-btn')}
                            to="/login"
                            leftIcon={
                                <span className={cx('left-icon')}>
                                    <EditIcon />
                                </span>
                            }
                        ></Button>
                    </div>
                    <span className={cx('role')}>Supervisor</span>
                </div>
            </div>
            <div className={cx('menu')}>
                <Button
                    className={cx('menu-item')}
                    to="/login"
                    leftIcon={
                        <span className={cx('left-icon')}>
                            <MappinIcon />
                        </span>
                    }
                    rightIcon={
                        <span className={cx('right-icon')}>
                            <ChevronRightIcon />
                        </span>
                    }
                >
                    Danh sách chiến dịch
                </Button>
                <Button
                    className={cx('menu-item')}
                    to="/login"
                    leftIcon={
                        <span className={cx('left-icon')}>
                            <LockIcon />
                        </span>
                    }
                    rightIcon={
                        <span className={cx('right-icon')}>
                            <ChevronRightIcon />
                        </span>
                    }
                >
                    Đổi mật khẩu
                </Button>
                <Button
                    className={cx('menu-item')}
                    to="/login"
                    leftIcon={
                        <span className={cx('left-icon')}>
                            <GlobeIcon />
                        </span>
                    }
                    rightIcon={
                        <span className={cx('language')}>
                            <span>Tiếng Việt</span>
                            <ChevronRightIcon />
                        </span>
                    }
                >
                    Ngôn ngữ
                </Button>
                <Button
                    className={cx('menu-item')}
                    to="/login"
                    leftIcon={
                        <span className={cx('left-icon')}>
                            <MailIcon />
                        </span>
                    }
                    rightIcon={
                        <span className={cx('right-icon')}>
                            <ChevronRightIcon />
                        </span>
                    }
                >
                    Liên hệ
                </Button>
            </div>
            <div className={cx('btn-block')}>
                <Button secondaryError>Đăng xuất</Button>
            </div>
        </div>
    );
}

export default Home;
