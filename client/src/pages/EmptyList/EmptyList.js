import classNames from 'classnames/bind';
import images from '~/assests/images';
import Button from '~/components/Button';
import styles from './EmptyList.module.scss';

const cx = classNames.bind(styles);
const createType = (type) => {
    switch (type) {
        case 'campaign':
            return {
                message: (
                    <>
                        Chưa có chiến dịch nào,
                        <br />
                        hãy tạo để quản lý ngay.
                    </>
                ),
                button: {
                    lable: 'Tạo chiến dịch',
                    to: '/campaign-create',
                }
            };

        case 'booth':
            return {
                message: (
                    <>
                        Chưa có gian hàng nào,
                        <br />
                        hãy tạo để quản lý ngay.
                    </>
                ),
                button: {
                    lable: 'Tạo gian hàng',
                    to: '/booth-create',
                }
            };

        default:
            break;
    }
};

function EmptyList({ variant = 'campaign' }) {
    const type = createType(variant);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('message-wrapper')}>
                <img srcSet={`${images.search} 2x`} alt="empty" />
                <span className={cx('message')}>
                    {type.message}
                </span>
            </div>
            <Button to={type.button.to} className={cx('create-btn')} secondary>
                {type.button.lable}
            </Button>
        </div>
    );
}

export default EmptyList;
