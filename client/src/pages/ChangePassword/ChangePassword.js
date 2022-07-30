import classNames from "classnames/bind";
import { useState } from 'react';
import Button from "~/components/Button";
import { BackIcon, ShowPasswordIcon } from "~/components/Icon";
import Input from "~/components/Input";

import styles from "./ChangePassword.module.scss";


const cx = classNames.bind(styles);

function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Button primary leftIcon={<BackIcon />} className={cx("back-btn")} />
                <div className={cx("header")}>
                    <h2>Đổi mật khẩu</h2>
                </div>
                <div className={cx("body")}>
                    <div className={cx("form")}>
                        <Input
                            type={showPassword?"text":"password"}
                            className={cx('input')}
                            title="Mật khẩu mới"
                            rightIcon={{ icon: <ShowPasswordIcon />, onClick: handleShowPassword }}
                        />
                        <Input
                            type={showPassword?"text":"password"}
                            className={cx('input')}
                            title="Xác nhận mật khẩu"
                            rightIcon={{ icon: <ShowPasswordIcon />, onClick: handleShowPassword }}
                        />
                    </div>
                    <div className={cx("bottom")}>
                        <Button primary>Lưu mật khẩu</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChangePassword;