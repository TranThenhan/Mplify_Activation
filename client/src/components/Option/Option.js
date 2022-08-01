import classNames from 'classnames/bind';
import styles from './Option.module.scss';

const cx = classNames.bind(styles);

function Option({ children, ...props }) {

    return (
       <div {...props} className={cx('option')}>{children}</div>
    );
}

export default Option;
