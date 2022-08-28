import classNames from 'classnames/bind';
import styles from './ToggleSwitch.module.scss';

const cx = classNames.bind(styles);

function ToggleSwitch({checked, onChange}) {
    return (
        <label onClick={() => onChange()} className={cx('switch')}>
            <input defaultChecked = {checked} type="checkbox" />
            <span className={cx('slider', {round: true})}></span>
        </label>
    );
}

export default ToggleSwitch;
