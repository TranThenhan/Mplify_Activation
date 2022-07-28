import classNames from 'classnames/bind';
import styles from './Radio.module.scss';

const cx = classNames.bind(styles);

function Radio({ size = 'medium', checked, onChange }) {
    return (
        <div className={cx('wrapper', { [size]: size })}>
            <input onChange={onChange} checked={checked} type={'radio'} />
            <span className={cx('check')}></span>
        </div>
    );
}

export default Radio;
