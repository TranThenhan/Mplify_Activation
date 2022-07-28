import classNames from "classnames/bind";
import Button from "~/components/Button";
import { BackIcon } from "~/components/Icon";

import styles from "./RegisterRole.module.scss";


const cx = classNames.bind(styles);

function RegisterRole() {


    return (
        <div className={cx("wrapper")}>
            <div className={cx("inner")}>
                <Button primary leftIcon ={<BackIcon/>} className={cx("back-btn")}/>
                <div className={cx("header")}>
                    <h2>Tạo tài khoản mới</h2>
                    <div className={cx("wellcome")}>
                        <p>Chào mừng bạn đến với <a href="wwww.google.com">Activatio.vn</a> Vui lòng chọn loại tài khoản.</p>
                    </div>
                </div>
                <div className={cx("body")}>
                    <div className={cx("button-block")}>
                        <Button secondary>Subpervisor</Button>
                        <Button secondary>Project Leader</Button>
                    </div>
                    <p>Bạn đã có tài khoản? <a href="www.google.com">Đăng nhập ngay</a></p>
                </div>
            </div>
        </div>
    );
}

export default RegisterRole;