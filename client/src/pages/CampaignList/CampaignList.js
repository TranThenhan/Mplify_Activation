import classNames from 'classnames/bind';
import styles from './CampaignList.module.scss';
import images from '~/assests/images';
import Button from '~/components/Button';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import { ClockIcon, PlusIcon } from '~/components/Icon';
import CardExpand from '~/components/CardExpand/CardExpand';
import CardItem from '~/components/CardItem';
const cx = classNames.bind(styles);

function CampaignList() {
    let campaignList = [1];
    return (
        <div className={cx('wrapper')}>
            {campaignList.length > 0 ? (
                <div className={cx('list-wrapper')}>
                    <Topbar
                        currentPage={<span className={cx('current-page')}>Danh sách chiến dịch</span>}
                        rightButton={<Button primary className={cx('add-btn')} leftIcon={<PlusIcon />}></Button>}
                        largeRightButton={
                            <Button primary className={cx('large-add-btn')}>
                                Thêm chiến dịch mới
                            </Button>
                        }
                    />
                    <div className={cx('list-wrapper-inner')}>
                        <CardExpand title="Chiến dịch 1">
                            <CardItem icon={<ClockIcon/>}>2020-11-20 - 2022-11-9</CardItem>
                            <CardItem icon={<ClockIcon/>}>2020-11-20 - 2022-11-9</CardItem>
                        </CardExpand>
                    </div>
                </div>
            ) : (
                <div className={cx('empty-list-wrapper')}>
                    <Topbar
                        currentPage={<span className={cx('current-page')}>Danh sách chiến dịch</span>}
                        rightButton={<Button primary className={cx('add-btn')} leftIcon={<PlusIcon />}></Button>}
                    />
                    <div className={cx('message-wrapper')}>
                        <img srcSet={`${images.search} 2x`} alt="empty" />
                        <span className={cx('message')}>
                            Chưa có chiến dịch nào,
                            <br />
                            hãy tạo để quản lý ngay.
                        </span>
                    </div>
                    <Button className={cx('create-btn')} secondary>
                        Tạo chiến dịch
                    </Button>
                </div>
            )}
        </div>
    );
}

export default CampaignList;
