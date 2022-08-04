import classNames from 'classnames/bind';
import styles from './NavbarMobile.module.scss';
import Button from '~/components/Button';
import { BackIcon} from '~/components/Icon';

const cx = classNames.bind(styles);

function NavbarMobile({currentPage, rightButton}) {
    return (
        <div className={cx('nav-bar')}>
            <div className={cx('back-block')}>
                <Button primary className={cx('back-btn')} leftIcon={<BackIcon />}></Button>
                {currentPage}
            </div>
            {rightButton}
        </div>
    );
}

export default NavbarMobile;
