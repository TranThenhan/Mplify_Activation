import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';
import { MediumCheckICon, SmallCheckICon } from './Icon';

const cx = classNames.bind(styles);

function Checkbox({ size = 'medium', checked, onChange }) {
    return (
        <div className={cx('wrapper', { [size]: size, 'wrapper-uncheck': !checked })}>
            <input onChange={onChange} checked={checked} type="checkbox" />
            {checked && <>{size === 'medium' ? <MediumCheckICon /> : <SmallCheckICon />}</>}
        </div>
    );
}

export default Checkbox;
