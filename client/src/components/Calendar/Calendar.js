import classNames from 'classnames/bind';
import { useState } from 'react';
import Button from '../Button';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../Icon';
import styles from './Calendar.module.scss';

const cx = classNames.bind(styles);

function Calendar({ value, className, onChange }) {
    const [show, setShow] = useState(false);
    const days = [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        31, 1, 2, 3, 4
    ];
    const select = 2;
    return (
        <div className={cx('wrapper', { [className]: className })}>
            <div className={cx('inner')} onBlur={() => setShow(false)} tabIndex={0}>
                <div className={cx('select')} onClick={() => setShow(!show)}>
                    {value}
                    <ChevronDownIcon size="16" />
                </div>
                {show && (
                    <div className={cx('calendar')}>
                        <div className={cx('top')}>
                            <p className={cx('lable')}>Tháng 5, 2022</p>
                            <div className={cx('chevron-block')}>
                                <Button className={cx('chevron')} leftIcon={<ChevronLeftIcon />} />
                                <Button className={cx('chevron')} leftIcon={<ChevronRightIcon />} />
                            </div>
                        </div>
                        <div className={cx('week-lables')}>
                            <div className={cx('week-lable')}>T2</div>
                            <div className={cx('week-lable')}>T3</div>
                            <div className={cx('week-lable')}>T4</div>
                            <div className={cx('week-lable')}>T5</div>
                            <div className={cx('week-lable')}>T6</div>
                            <div className={cx('week-lable')}>T7</div>
                            <div className={cx('week-lable')}>CN</div>
                        </div>
                        <div className={cx('separetor')}></div>
                        <div className={cx('days')}>
                            {days.map((day, index) => (
                                <div key={index} className={cx('day', {'selected':index===select})}>
                                    <button onMouseDown={(e)=> {e.preventDefault()}} onClick={() => {console.log('a');}}>{day}</button>
                                </div>
                            ))}
                        </div>
                        <Button className={cx('select-btn')} primary>
                            Chọn
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Calendar;
