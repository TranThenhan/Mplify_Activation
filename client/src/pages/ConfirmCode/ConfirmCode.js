import classNames from 'classnames/bind';
import { useState } from 'react';
import OtpInput from 'react-otp-input';
import Button from '~/components/Button';
import { BackIcon } from '~/components/Icon';

import styles from './ConfirmCode.module.scss';

const cx = classNames.bind(styles);

function ForgotPassword() {

    const [code, setCode] = useState('');
    const handleChange = (code) => setCode(code);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Button primary leftIcon={<BackIcon />} className={cx('back-btn')} />
                <div className={cx('header')}>
                    <h2>Nhận mã</h2>
                    <div className={cx('welcome')}>
                        <p>Vui lòng kiểm tra email và nhập mã xác minh vào bên dưới.</p>
                    </div>
                </div>
                <div className={cx('body')}>
                    <div className={cx('form')}>
                        <OtpInput
                            value={code}
                            onChange={handleChange}
                            shouldAutoFocus
                            isInputNum
                            numInputs={6}
                            separator={<span className={cx('separator-otp')}></span>}
                            focusStyle={cx("focus-style")}
                            inputStyle={cx('otp-input')}
                            containerStyle={cx('otp-container')}
                            placeholder="______"
                        />
                    </div>
                    <div className={cx('bottom')}>
                        <p>Gửi lại mã</p>
                        <Button primary>Xác nhận</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
