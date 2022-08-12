import classNames from 'classnames/bind';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Select from '~/components/Select';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import styles from './CreateBooth.module.scss';

const cx = classNames.bind(styles);

function CreateBooth() {
    return (
        <div className={cx('wrapper')}>
            <Topbar
                className={cx('topbar')}
                currentPage={<span className={cx('current-page')}>Tạo gian hàng</span>}
            />
            <div className={cx('form')}>
                <Input title="Tên gian hàng" />
                <Input title="Địa điểm" />
                <Input title="Supervisor" />
                <div className={cx('select-wrapper')}>
                    <span className={cx('select-title')}>Thời gian diễn ra</span>
                    <div className={cx('select-items')}>
                        <Select className={cx('select')} value="10/6/2022"></Select>
                        <span>đến</span>
                        <Select className={cx('select')} value="30/6/2022"></Select>
                    </div>
                </div>
                <Input title="Loại gian hàng" />
            </div>
            <Button className={cx('create-btn')} primary>
                Tạo gian hàng
            </Button>
        </div>
    );
}

export default CreateBooth;
