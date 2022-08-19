import classNames from 'classnames/bind';
import { useState } from 'react';
import { ChevronDownIcon } from '../Icon';
import Option from '../Option';
import styles from './Select.module.scss';

const cx = classNames.bind(styles);

function Select({ value, children, className, onChange}) {
    const [show, setShow] = useState(false);

    const handleSelectOption = (optValue) => {
        onChange(optValue);
        setShow(false);
    };
    let listChildren = children;
    if (!Array.isArray(listChildren)) listChildren = [children];

    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('inner')} onBlur={() => setShow(false)} tabIndex={0}>
                <div className={cx('select')} onClick={() => setShow(!show)}>
                    {value}
                    <ChevronDownIcon size='16'/>
                </div>
                {show && (
                    <div className={cx('wrapper-options')}>
                        {listChildren.map((child, index) => {
                            return (
                                <Option key={index} value={child.props.value} onClick={handleSelectOption}>
                                    {child.props.children}
                                </Option>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
export default Select;
