import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import { ChevronDownIcon, ChevronUpIcon } from '../Icon';
import styles from './CardExpand.module.scss';

const cx = classNames.bind(styles);

function CardExpand({ title, children }) {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    let listChildren = children;
    if (!Array.isArray(listChildren)) listChildren = [children];
    const [firstChild, ...restChild] = listChildren;
    
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <p className={cx('title')}>{title}</p>
                <div className={cx('content')}>
                    {firstChild}
                    <div className={cx('content-collapse', { show: toggle })}>{restChild}</div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <Button
                    onClick={handleClick}
                    className={cx('collapse-btn')}
                    leftIcon={toggle ? <ChevronUpIcon /> : <ChevronDownIcon />}
                />
            </div>
        </div>
    );
}

export default CardExpand;
