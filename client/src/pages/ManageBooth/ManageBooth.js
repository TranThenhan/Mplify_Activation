import classNames from 'classnames/bind';
import Button from '~/components/Button';
import CampaignCardExpand from '~/components/CampaignCardExpand';
import CampaignCardItem from '~/components/CampaignCardItem';
import { PlusIcon } from '~/components/Icon';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import EmptyList from '../EmptyList';
import styles from './ManageBooth.module.scss';

const cx = classNames.bind(styles);

function ManageBooth() {
    const boothList = [];
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
                    className={cx({ 'topbar-custom': boothList.length === 0 })}
                    currentPage={<span className={cx('current-page')}>Danh sách chiến dịch</span>}
                    rightButton={
                        <Button to="/booth-create" primary className={cx('add-btn')} leftIcon={<PlusIcon />}></Button>
                    }
                    largeRightButton={
                        <Button to="/booth-create" primary className={cx('large-add-btn')}>
                            Thêm gian hàng
                        </Button>
                    }
                />

                {boothList.length > 0 ? (
                    <div className={cx('list-booth')}>
                        <CampaignCardExpand variant="two-button" title="Gian hàng 1">
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="user" variant="have-icon">
                                Nguyễn Hạnh My
                            </CampaignCardItem>
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="location" variant="have-icon">
                                11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                            </CampaignCardItem>
                            <CampaignCardItem type="sampling" variant="have-icon">
                                Sampling
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand variant="two-button" title="Gian hàng 1">
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="user" variant="have-icon">
                                Nguyễn Hạnh My
                            </CampaignCardItem>
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="location" variant="have-icon">
                                11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                            </CampaignCardItem>
                            <CampaignCardItem type="sampling" variant="have-icon">
                                Sampling
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand variant="two-button" title="Gian hàng 1">
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="user" variant="have-icon">
                                Nguyễn Hạnh My
                            </CampaignCardItem>
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="location" variant="have-icon">
                                11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                            </CampaignCardItem>
                            <CampaignCardItem type="sampling" variant="have-icon">
                                Sampling
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand variant="two-button" title="Gian hàng 1">
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="user" variant="have-icon">
                                Nguyễn Hạnh My
                            </CampaignCardItem>
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="location" variant="have-icon">
                                11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                            </CampaignCardItem>
                            <CampaignCardItem type="sampling" variant="have-icon">
                                Sampling
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand variant="two-button" title="Gian hàng 1">
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="user" variant="have-icon">
                                Nguyễn Hạnh My
                            </CampaignCardItem>
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="location" variant="have-icon">
                                11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                            </CampaignCardItem>
                            <CampaignCardItem type="sampling" variant="have-icon">
                                Sampling
                            </CampaignCardItem>
                        </CampaignCardExpand>
                        <CampaignCardExpand variant="two-button" title="Gian hàng 1">
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="user" variant="have-icon">
                                Nguyễn Hạnh My
                            </CampaignCardItem>
                            <CampaignCardItem type="time" variant="have-icon">
                                12/6/2022 - 30/6/2022
                            </CampaignCardItem>
                            <CampaignCardItem type="location" variant="have-icon">
                                11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                            </CampaignCardItem>
                            <CampaignCardItem type="sampling" variant="have-icon">
                                Sampling
                            </CampaignCardItem>
                        </CampaignCardExpand>
                    </div>
                ) : (
                    <EmptyList variant='booth'/>
                )}
            </div>
        </div>
    );
}

export default ManageBooth;
