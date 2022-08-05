import classNames from "classnames/bind";
import styles from './SidebarMobile.module.scss';

const cx = classNames.bind(styles);

function SidebarMobile() {
    return (<div className={cx('wrapper')}>SidebarMobile</div>);
}

export default SidebarMobile;