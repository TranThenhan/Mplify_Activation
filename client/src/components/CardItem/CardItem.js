import classNames from 'classnames/bind';
import styles from './CardItem.module.scss';

const cx = classNames.bind(styles);

function CardItem({ icon, children }) {
    return (
        <div className={cx('wrapper')}>
            <span>{icon}</span>
            <p>{children}</p>
        </div>
    );
}

export default CardItem;
