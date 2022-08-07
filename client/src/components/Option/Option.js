import classNames from 'classnames/bind';
import styles from './Option.module.scss';

const cx = classNames.bind(styles);

function Option({ value, children, onClick }) {
    return (
        <div className={cx('option')} onClick={() => onClick(value)}>
            {children}
        </div>
    );
}
export default Option;
