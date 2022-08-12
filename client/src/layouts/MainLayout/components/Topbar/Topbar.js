import classNames from 'classnames/bind';
import styles from './Topbar.module.scss';
import Button from '~/components/Button';
import { BackIcon} from '~/components/Icon';

const cx = classNames.bind(styles);

function Topbar({currentPage, rightButton, largeRightButton, className}) {
    return (
        <div className={cx('wrapper', {[className]:className})}>
            <div className={cx('back-block')}>
                <Button primary className={cx('back-btn')} leftIcon={<BackIcon />}></Button>
                {currentPage}
            </div>
            {rightButton}
            {largeRightButton}
        </div>
    );
}

export default Topbar;
