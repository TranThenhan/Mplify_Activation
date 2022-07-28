import classNames from "classnames/bind";
import Button from "~/components/Button";
import { BackIcon } from "~/components/Icon";
import Input from "~/components/Input";

import styles from "./ForgotPassword.module.scss";


const cx = classNames.bind(styles);

function ForgotPassword() {

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Button primary leftIcon={<BackIcon />} className={cx("back-btn")} />
                <div className={cx("header")}>
                    <h2>Tạo tài khoản mới</h2>
                    <div className={cx("welcome")}>
                        <p><a href="wwww.google.com">Activatio.vn</a> sẽ gửi mã xác minh đến địa chỉ email bạn nhập bên dưới.</p>
                    </div>
                </div>
                <div className={cx("body")}>
                    <div className={cx("form")}>
                        <Input className={cx("input")} title="Email" />
                    </div>
                    <div className={cx("bottom")}>
                        <Button primary>Nhận mã xác minh</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;