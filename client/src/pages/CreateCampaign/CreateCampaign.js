import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Select from '~/components/Select';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import styles from './CreateCampaign.module.scss';

const cx = classNames.bind(styles);

function CreateCampaign() {
    return (
        <div className={cx('wrapper')}>
            <Topbar
                currentPage={<span className={cx('current-page')}>Tạo chiến dịch</span>}
            />
            <div className={cx('form')}>
                <Input title="Tên chiến dịch" />
                <div className={cx('select-wrapper')}>
                    <span className={cx('select-title')}>Thời gian diễn ra</span>
                    <div className={cx('select-items')}>
                        <Select className={cx('select')} value="10/6/2022"></Select>
                        <span>đến</span>
                        <Select className={cx('select')} value="30/6/2022"></Select>
                    </div>
                </div>
                <Input title="Mục tiêu" />
                <Input title="Mô tả" />
            </div>
            <Button className={cx('create-btn')} primary>
                Tạo chiến dịch
            </Button>
        </div>
    );
}

export default CreateCampaign;
