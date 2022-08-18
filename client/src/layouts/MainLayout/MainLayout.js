import classNames from 'classnames/bind';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import styles from './MainLayout.module.scss';

const cx = classNames.bind(styles);

function MainLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Sidebar />
                <div style={{ flex: '1' }} className={cx('main')}>
                    <Header />
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;
