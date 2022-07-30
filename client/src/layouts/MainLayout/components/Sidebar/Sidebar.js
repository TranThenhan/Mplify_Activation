import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import images from '~/assests/images';
import Input from '~/components/Input';
import Button from '~/components/Button';
import { ChartPieIcon, UserGroupIcon, GearIcon, ChevronUpIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img srcSet={`${images.logoDesktop} 2x`} alt="logo" />
            </div>
            <div className={cx('main')}>
                <Input className={cx('select')} />
                <div className={cx('menu')}>
                    <Button className={cx('menu-item', { active: true })} leftIcon={<UserGroupIcon />} to="/register">
                        Quản lý gian hàng
                    </Button>
                    <Button className={cx('menu-item')} leftIcon={<ChartPieIcon />} to="/register">
                        Báo cáo tổng hợp
                    </Button>
                    <Button
                        className={cx('menu-item', { active: true })}
                        leftIcon={<GearIcon />}
                        rightIcon={<ChevronUpIcon />}
                        to="/register"
                    >
                        Cài đặt
                    </Button>
                    <Button className={cx('menu-item')} to='/register'>Danh sách chiến dịch</Button>
                    <Button className={cx('menu-item')} to='/register'>Thông tin tài khoản</Button>
                    <Button className={cx('menu-item')} to='/register'>Đổi mật khẩu</Button>
                    <Button className={cx('menu-item')} to='/register'>Ngôn ngữ</Button>
                    <Button className={cx('menu-item')} to='/register'>Liên hệ</Button>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;
