import classNames from 'classnames/bind';
import Card from '~/components/Card';
import CardItem from '~/components/CardItem';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import styles from './BoothList.module.scss';

const cx = classNames.bind(styles);

function BoothList() {
    return (
        <div className={cx('wrapper')}>
            <Topbar className={cx('topbar')} currentPage={<span className={cx('current-page')}>Tạo chiến dịch</span>} />
            <div className={cx('booth-list')}>
                <Card variant="card-expand-right-button" title="Siêu thị Coopxtra Vạn Hạnh">
                    <CardItem type="user" variant="have-icon">
                        Nguyễn Hạnh My
                    </CardItem>
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                    <CardItem type="location" variant="have-icon">
                    11 Sư Vạn Hạnh, Phường 12, Quận 10, Thành phố Hồ Chí Minh
                    </CardItem>
                    <CardItem type="sampling" variant="have-icon">
                    Sampling
                    </CardItem>
                    <CardItem type="campaign" variant="have-icon">
                    Chiến dịch ...........
                    </CardItem>
                </Card>
                <Card variant="card-expand-right-button" title="Gian hàng 1">
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                </Card>
                <Card variant="card-expand-right-button" title="Gian hàng 1">
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                </Card>
                <Card variant="card-expand-right-button" title="Gian hàng 1">
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                </Card>
                <Card variant="card-expand-right-button" title="Gian hàng 1">
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                </Card>
                <Card variant="card-expand-right-button" title="Gian hàng 1">
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                    <CardItem type="time" variant="have-icon">
                        12/6/2022 - 30/6/2022
                    </CardItem>
                </Card>
            </div>
        </div>
    );
}

export default BoothList;
