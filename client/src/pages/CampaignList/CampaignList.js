import classNames from 'classnames/bind';
import styles from './CampaignList.module.scss';
import Button from '~/components/Button';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import { PlusIcon } from '~/components/Icon';
import CampaignCardExpand from '~/components/CampaignCardExpand/CampaignCardExpand';
import CampaignCardItem from '~/components/CampaignCardItem';
import EmptyList from '../EmptyList';
const cx = classNames.bind(styles);

function CampaignList() {
    const campaignList = [];
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Topbar
                    className={cx({ 'topbar-custom': campaignList.length === 0 })}
                    currentPage={<span className={cx('current-page')}>Danh sách chiến dịch</span>}
                    rightButton={
                        <Button
                            to="/campaign-create"
                            primary
                            className={cx('add-btn')}
                            leftIcon={<PlusIcon />}
                        ></Button>
                    }
                    largeRightButton={
                        <Button to="/campaign-create" primary className={cx('large-add-btn')}>
                            Thêm chiến dịch mới
                        </Button>
                    }
                />
                {campaignList.length > 0 ? (
                    <div className={cx('list-campaign')}>
                        <CampaignCardExpand title="Chiến dịch 1">
                            <CampaignCardItem type="time">10/6/2022</CampaignCardItem>
                            <CampaignCardItem type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand title="Chiến dịch 1">
                            <CampaignCardItem type="time">10/6/2022</CampaignCardItem>
                            <CampaignCardItem type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand title="Chiến dịch 1">
                            <CampaignCardItem type="time">10/6/2022</CampaignCardItem>
                            <CampaignCardItem type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand title="Chiến dịch 1">
                            <CampaignCardItem type="time">10/6/2022</CampaignCardItem>
                            <CampaignCardItem type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CampaignCardItem>
                        </CampaignCardExpand>
                    </div>
                ) : (
                    <EmptyList variant='campaign'/>
                )}
            </div>
        </div>
    );
}

export default CampaignList;
