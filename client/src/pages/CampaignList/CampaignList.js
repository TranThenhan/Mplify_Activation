import classNames from 'classnames/bind';
import styles from './CampaignList.module.scss';
import Button from '~/components/Button';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import { PlusIcon } from '~/components/Icon';
import Card from '~/components/Card/Card';
import CardItem from '~/components/CardItem';
import EmptyList from '../EmptyList';
const cx = classNames.bind(styles);

function CampaignList() {
    const campaignList = [1];
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
                        <Card variant="card-expand-two-button" title="Chiến dịch 1">
                            <CardItem variant="have-icon-no-icon" type="time">
                                10/6/2022
                            </CardItem>
                            <CardItem variant="have-icon-no-icon" type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CardItem>
                        </Card>
                        <Card variant="card-expand-two-button" title="Chiến dịch 1">
                            <CardItem variant="have-icon-no-icon" type="time">
                                10/6/2022
                            </CardItem>
                            <CardItem variant="have-icon-no-icon" type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CardItem>
                        </Card>
                        <Card variant="card-expand-two-button" title="Chiến dịch 1">
                            <CardItem variant="have-icon-no-icon" type="time">
                                10/6/2022
                            </CardItem>
                            <CardItem variant="have-icon-no-icon" type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CardItem>
                        </Card>
                        <Card variant="card-expand-two-button" title="Chiến dịch 1">
                            <CardItem variant="have-icon-no-icon" type="time">
                                10/6/2022
                            </CardItem>
                            <CardItem variant="have-icon-no-icon" type="info">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </CardItem>
                        </Card>
                    </div>
                ) : (
                    <EmptyList variant="campaign" />
                )}
            </div>
        </div>
    );
}

export default CampaignList;
