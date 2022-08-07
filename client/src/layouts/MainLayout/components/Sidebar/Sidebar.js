import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Sidebar.module.scss';
import images from '~/assests/images';
import Button from '~/components/Button';
import {
    ChartPieIcon,
    UserGroupIcon,
    GearIcon,
    ChevronUpIcon,
    NoIcon,
    LogoutIcon,
    ChevronDownIcon,
} from '~/components/Icon';
import Select from '~/components/Select';
import Option from '~/components/Option';

const cx = classNames.bind(styles);

function Sidebar() {
    const [toggleSetting, setToggleSetting] = useState(true);
    const [selectValue, setSelectValue] = useState('');

    const handleChangeSelect = (value) => {
        setSelectValue(value);
    };



    return (
        <aside className={cx('wrapper')}>
            <div className={cx('logo')}>
                <img srcSet={`${images.logoDesktop} 2x`} alt="logo" />
            </div>
            <div className={cx('main')}>
                <Select value={selectValue} onChange={handleChangeSelect}>
                    <Option value="a">Chien dich A</Option>
                    <Option value="b">Chien dich B</Option>
                    <Option value="c">Chien dich C</Option>
                </Select>

                <div className={cx('menu')}>
                    <Button className={cx('menu-item')} leftIcon={<UserGroupIcon />} to="/">
                        Quản lý gian hàng
                    </Button>
                    <Button className={cx('menu-item')} leftIcon={<ChartPieIcon />} to="/register">
                        Báo cáo tổng hợp
                    </Button>
                    <Button
                        className={cx('menu-item')}
                        leftIcon={<GearIcon />}
                        rightIcon={toggleSetting === true ? <ChevronUpIcon /> : <ChevronDownIcon />}
                        onClick={() => setToggleSetting(!toggleSetting)}
                    >
                        Cài đặt
                    </Button>
                    {toggleSetting && (
                        <div className={cx('collapse')}>
                            <Button
                                className={cx('collapse-item')}
                                leftIcon={<NoIcon />}
                                to="/campaign-list"
                            >
                                Danh sách chiến dịch
                            </Button>
                            <Button
                                className={cx('collapse-item')}
                                leftIcon={<NoIcon />}
                                to="/campaign-create"
                            >
                                Thông tin tài khoản
                            </Button>
                            <Button className={cx('collapse-item')} leftIcon={<NoIcon />} to="/register">
                                Đổi mật khẩu
                            </Button>
                            <Button
                                className={cx('collapse-item')}
                                leftIcon={<NoIcon />}
                                rightIcon={<span className={cx('language')}>Tiếng Việt</span>}
                                to="/register"
                            >
                                Ngôn ngữ
                            </Button>
                            <Button className={cx('collapse-item')} leftIcon={<NoIcon />} to="/register">
                                Liên hệ
                            </Button>
                        </div>
                    )}
                </div>

                <Button className={cx('logout-btn')} leftIcon={<LogoutIcon />} secondaryError>
                    Đăng xuất
                </Button>
            </div>
        </aside>
    );
}

export default Sidebar;
