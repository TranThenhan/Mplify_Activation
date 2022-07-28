import classNames from "classnames/bind";
import Button from "~/components/Button";
import { BackIcon } from "~/components/Icon";
import Input from "~/components/Input";

import styles from "./ChangePassword.module.scss";


const cx = classNames.bind(styles);

function ChangePassword() {

    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Button primary leftIcon={<BackIcon />} className={cx("back-btn")} />
                <div className={cx("header")}>
                    <h2>Đổi mật khẩu</h2>
                </div>
                <div className={cx("body")}>
                    <div className={cx("form")}>
                        <Input className={cx("input")} title="Mật khẩu mới" />
                        <Input className={cx("input")} title="Xác nhận mật khẩu" />
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