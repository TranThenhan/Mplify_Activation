import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import { ChevronDownIcon, ChevronUpIcon } from '../Icon';
import styles from './CampaignCardExpand.module.scss';

const cx = classNames.bind(styles);

function CampaignCardExpand({ title, children, variant='default' }) {
    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    let listChildren = children;
    if (!Array.isArray(listChildren)) listChildren = [children];
    const [firstChild, ...restChild] = listChildren;

    return (
        <div className={cx('wrapper', {[variant]: variant})}>
            <div className={cx('inner')}>
                <p className={cx('title')}>{title}</p>
                <div className={cx('content')}>
                    {firstChild}
                    <div className={cx('content-collapse', { show: toggle })}>{restChild}</div>
                    <div className={cx('content-non-collapse')}>{restChild}</div>
                </div>
            </div>
            <div className={cx('bottom')}>
                <Button
                    onClick={handleClick}
                    className={cx('collapse-btn')}
                    leftIcon={toggle ? <ChevronUpIcon /> : <ChevronDownIcon />}
                />
            </div>
            <div className={cx('bottom-mobile')}>
                <Button className={cx('collapse-btn')} primary>
                    Xem chi tiết
                </Button>
                <Button className={cx('collapse-btn')} secondary>
                    Chỉnh sửa
                </Button>
            </div>
        </div>
    );
}

export default CampaignCardExpand;
