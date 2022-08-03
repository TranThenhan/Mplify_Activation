import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';
import { ChevronDownIcon16 } from '../Icon';
import styles from './Select.module.scss';

const cx = classNames.bind(styles);

function Select({ value, hideOptions, children, className, ...props }) {
    const [show, setShow] = useState(false);
    useEffect(() => {
        setShow(false);
    }, [hideOptions]);

    return (
        <div className={cx('wrapper', {[className]: className})}>
            <div className={cx('inner')} onBlur={() => setShow(false)} tabIndex={0}>
                <div className={cx('select')} onClick={() => setShow(!show)}>
                    {value}
                    <ChevronDownIcon16 />
                </div>
                {show && <div className={cx('wrapper-options')}>{children}</div>}
            </div>
        </div>
    );
}
export default Select;
