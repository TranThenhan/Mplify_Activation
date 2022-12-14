import classNames from 'classnames/bind';
import { CircleInfoIcon, ClockIcon, LayerGroupIcon, MappinCardIcon, StarIcon, UserIcon } from '../Icon';
import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function createLable(type) {
    switch (type) {
        case 'time':
            return {
                icon: (
                    <>
                        <span className={cx('icon')}>
                            <ClockIcon />
                        </span>
                        <span className={cx('dot-icon')}>&bull;&nbsp;&nbsp;</span>
                    </>
                ),
                lable: 'Thời gian: ',
            };
        case 'info':
            return {
                icon: (
                    <>
                        <span className={cx('icon')}>
                            <CircleInfoIcon />
                        </span>
                        <span className={cx('dot-icon')}>&bull;&nbsp;&nbsp;</span>
                    </>
                ),
                lable: 'Thông tin: ',
            };
        case 'user':
            return {
                icon: (
                    <>
                        <span className={cx('icon')}>
                            <UserIcon />
                        </span>
                        <span className={cx('dot-icon')}>&bull;&nbsp;&nbsp;</span>
                    </>
                ),
                lable: 'Tên: ',
            };
        case 'location':
            return {
                icon: (
                    <>
                        <span className={cx('icon')}>
                            <MappinCardIcon />
                        </span>
                        <span className={cx('dot-icon')}>&bull;&nbsp;&nbsp;</span>
                    </>
                ),
                lable: 'Vị trí: ',
            };
        case 'sampling':
            return {
                icon: (
                    <>
                        <span className={cx('icon')}>
                            <LayerGroupIcon />
                        </span>
                        <span className={cx('dot-icon')}>&bull;&nbsp;&nbsp;</span>
                    </>
                ),
                lable: 'Sampling: ',
            };
        case 'campaign':
            return {
                icon: (
                    <>
                        <span className={cx('icon')}>
                            <StarIcon />
                        </span>
                        <span className={cx('dot-icon')}>&bull;&nbsp;&nbsp;</span>
                    </>
                ),
                lable: 'Chiến dịch: ',
            };
        default:
            break;
    }
}

function CardItem({ type = 'time', children, variant = 'default' }) {
    const { icon, lable } = createLable(type);

    return (
        <div className={cx('wrapper', { [variant]: variant })}>
            {icon}
            <div>
                <span className={cx('lable')}>{lable}</span>
                <span>{children}</span>
            </div>
        </div>
    );
}

export default CardItem;
