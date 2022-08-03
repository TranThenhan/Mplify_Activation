import classNames from 'classnames/bind';
import styles from './CampaignList.module.scss';
import images from '~/assests/images';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function CampaignList() {
    let campaignList = [];
    return (
        <div className={cx('wrapper')}>
            {campaignList.length > 0 ? (
                <div className={cx('list-wrapper')}></div>
            ) : (
                <div className={cx('empty-list-wrapper')}>
                    <div className={cx('message-wrapper')}>
                        <img srcSet={`${images.search} 2x`} alt="empty" />
                        <span className={cx('message')}>Chưa có chiến dịch nào,<br/>hãy tạo để quản lý ngay.</span>
                    </div>
                    <Button className={cx('create-btn')} secondary>Tạo chiến dịch</Button>
                </div>
            )}
        </div>
    );
}

export default CampaignList;
