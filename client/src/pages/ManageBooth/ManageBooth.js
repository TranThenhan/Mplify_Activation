import classNames from 'classnames/bind';
import Button from '~/components/Button';
import CampaignCardExpand from '~/components/CampaignCardExpand';
import CampaignCardItem from '~/components/CampaignCardItem';
import { PlusIcon } from '~/components/Icon';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import styles from './ManageBooth.module.scss';

const cx = classNames.bind(styles);

function ManageBooth() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('card-top')}>
                    <CampaignCardExpand variant="card-top" title="Tên chiến dịch">
                        <CampaignCardItem variant="no-icon" type="time">
                            10/6/2022 - 30/6/2022.
                        </CampaignCardItem>
                        <CampaignCardItem variant="no-icon" type="info">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        </CampaignCardItem>
                    </CampaignCardExpand>
                </div>

                <Topbar
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
                            Thêm gian hàng
                        </Button>
                    }
                />
                <div className={cx('list-booth')}>
                    <CampaignCardExpand variant="two-button" title="Chiến dịch 1">
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                    </CampaignCardExpand>
                    <CampaignCardExpand variant="two-button" title="Chiến dịch 1">
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                    </CampaignCardExpand>
                    <CampaignCardExpand variant="two-button" title="Chiến dịch 1">
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                    </CampaignCardExpand>
                    <CampaignCardExpand variant="two-button" title="Chiến dịch 1">
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                    </CampaignCardExpand>
                    <CampaignCardExpand variant="two-button" title="Chiến dịch 1">
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                    </CampaignCardExpand>
                    <CampaignCardExpand variant="two-button" title="Chiến dịch 1">
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                        <CampaignCardItem variant="have-icon">lorem</CampaignCardItem>
                    </CampaignCardExpand>
                </div>
            </div>
        </div>
    );
}

export default ManageBooth;
