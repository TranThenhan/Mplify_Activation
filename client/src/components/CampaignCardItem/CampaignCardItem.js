import classNames from 'classnames/bind';
import { CircleInfoIcon, ClockIcon } from '../Icon';
import styles from './CampaignCardItem.module.scss';

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
        default:
            break;
    }
}

function CampaignCardItem({ type = 'time', children, variant = 'default' }) {
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

export default CampaignCardItem;
