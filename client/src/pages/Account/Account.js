import classNames from 'classnames/bind';
import images from '~/assests/images';
import Button from '~/components/Button';
import Input from '~/components/Input';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import styles from './Account.module.scss';

const cx = classNames.bind(styles);

function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Topbar className={cx('top-bar')} currentPage='Chỉnh sửa'/>
                <div>
                    <img className={cx('avatar')} srcSet={`${images.avtDefault} 2x`} alt="avatar" />
                </div>

                <div className={cx('form')}>
                    <Input title="Họ và tên" defaultValue="Nguyễn Hạnh My" />
                    <Input title="Email" defaultValue="email12345@gmail.com" />
                    <Input title="Số điện thoại" defaultValue="0808123456" />
                    <Input title="Vị trí" defaultValue="Project Manager" />
                </div>
                <Button className={cx('save-btn')} primary><span className={cx('btn-lable')}>Lưu thông tin</span><span className={cx('btn-lable-mobile')}>Lưu</span></Button>
            </div>
        </div>
    );
}

export default Account;
