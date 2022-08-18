import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '../Icon';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

function Card({ title, children, variant = 'default' }) {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    let listChildren = children;
    if (!Array.isArray(listChildren)) listChildren = [children];
    const [firstChild, ...restChild] = listChildren;

    return (
        <div className={cx('wrapper', { [variant]: variant })}>
            <div className={cx('inner')}>
                <div className={cx('center')}>
                    <p className={cx('title')}>{title}</p>
                    <div className={cx('content')}>
                        {firstChild}
                        <div className={cx('content-collapse', { show: toggle })}>{restChild}</div>
                        <div className={cx('content-non-collapse')}>{restChild}</div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <Button className={cx('right-expand-btn')} leftIcon={<ChevronRightIcon/>}></Button>
                </div>
            </div>

            <div className={cx('bottom-expand')}>
                <Button
                    onClick={handleClick}
                    className={cx('button')}
                    leftIcon={toggle ? <ChevronUpIcon /> : <ChevronDownIcon />}
                />
            </div>
            <div className={cx('bottom-two-btn')}>
                <Button className={cx('button')} primary>
                    Xem chi tiết
                </Button>
                <Button className={cx('button')} secondary>
                    Chỉnh sửa
                </Button>
            </div>
        </div>
    );
}

export default Card;
