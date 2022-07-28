import classNames from "classnames/bind";
import Button from "~/components/Button";
import { BackIcon } from "~/components/Icon";
import Input from "~/components/Input";

import styles from "./Register.module.scss";


const cx = classNames.bind(styles);

function Register() {

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Button primary leftIcon={<BackIcon />} className={cx("back-btn")} />
                <div className={cx("header")}>
                    <h2>Tạo tài khoản mới</h2>
                    <div className={cx("welcome")}>
                        <p>Chào mừng bạn đến với <a href="wwww.google.com">Activatio.vn</a></p>
                        <p>Nhập thông tin bên dưới để tạo một tài khoản mới.</p>
                    </div>
                </div>
                <div className={cx("body")}>
                    <div className={cx("form")}>
                        <Input className={cx("input")} title="Email" />
                        <Input className={cx("input")} title="Họ và tên" />
                        <Input className={cx("input")} title="Mật khẩu" />
                        <Input className={cx("input")} title="Xác nhận mật khẩu" />
                    </div>
                    <div className={cx("bottom")}>
                        <Button primary>Đăng ký</Button>
                        <p>Bạn đã có tài khoản? <a href="www.google.com">Đăng nhập ngay</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;