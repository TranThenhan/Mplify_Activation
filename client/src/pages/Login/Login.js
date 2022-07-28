import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import Input from '~/components/Input';
import styles from './Login.module.scss';
import { useState } from 'react';
import { BackIcon } from '~/components/Icon';

const cx = classNames.bind(styles);

function Login() {
    const [value, setValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleVerify = (value) => {
        if (value === 'danh') {
            setErrorMessage('danh khung');
        }
    };

    return (
                <div className={cx('wrapper')}>
                    <div className={cx('inner')}>
                        <Button primary leftIcon={<BackIcon />} className={cx('back-btn')} />
                        <div className={cx('header')}>
                            <h2>Đăng nhập</h2>
                            <div className={cx('wellcome')}>
                                <p>
                                    Chào mừng bạn đến với <a href="wwww.google.com">Activatio.vn</a> Đăng nhập để bắt
                                    đầu quản lý.
                                </p>
                            </div>
                        </div>
                        <div className={cx('body')}>
                            <div className={cx('form')}>
                                <Input
                                    className={cx('input')}
                                    value={value}
                                    title="Nhập email"
                                    onChange={(e) => {
                                        setValue(e.target.value);
                                    }}
                                    errorMessage={errorMessage}
                                    onBlur={() => {
                                        handleVerify(value);
                                    }}
                                    onFocus={() => setErrorMessage('')}
                                />
                                <Input className={cx('input')} title="Mật khẩu" />
                                <div className={cx('save-password')}>
                                    <Checkbox size="small" />
                                    <p>Lưu mật khẩu</p>
                                </div>
                            </div>

                            <div className={cx('bottom')}>
                                <div>
                                    <Button className={cx('button')} primary>
                                        Đăng nhập
                                    </Button>
                                    <p>Bạn quên mật khẩu?</p>
                                </div>
                                <p>
                                    Bạn chưa có tài khoản? <a href="www.google.com">Đăng ký ngay</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

    );
}

export default Login;
