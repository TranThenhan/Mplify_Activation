import classNames from 'classnames/bind';
import { format, startOfToday } from 'date-fns';
import { useState } from 'react';
import Button from '~/components/Button';
import Calendar from '~/components/Calendar';
import Input from '~/components/Input';
import Topbar from '~/layouts/MainLayout/components/Topbar';
import styles from './CreateCampaign.module.scss';

const cx = classNames.bind(styles);

function CreateCampaign() {
    const [selectedDay, setSelectedDay] = useState(startOfToday());
    console.log(selectedDay);
    return (
        <div className={cx('wrapper')}>
            <Topbar
                className={cx('topbar')}
                currentPage={<span className={cx('current-page')}>Tạo chiến dịch</span>}
            />
            <div className={cx('form')}>
                <Input title="Tên chiến dịch" />
                <div className={cx('select-wrapper')}>
                    <span className={cx('select-title')}>Thời gian diễn ra</span>
                    <div className={cx('select-items')}>
                        <Calendar onChange={(day) => setSelectedDay(day)} className={cx('select')} value={format(selectedDay, 'dd/MM/yyyy')}/>
                        <span>đến</span>
                        <Calendar className={cx('select')} value={format(selectedDay, 'dd/MM/yyyy')}/>
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
