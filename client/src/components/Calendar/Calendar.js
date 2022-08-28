import classNames from 'classnames/bind';
import {
    add,
    eachDayOfInterval,
    endOfMonth,
    endOfWeek,
    format,
    isEqual,
    isSameMonth,
    parse,
    startOfToday,
    startOfWeek,
} from 'date-fns';
import vi from 'date-fns/locale/vi';
import { useState } from 'react';
import Button from '../Button';
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '../Icon';
import styles from './Calendar.module.scss';

const cx = classNames.bind(styles);

function Calendar({ value, className, onChange }) {
    const [show, setShow] = useState(false);

    const today = startOfToday();
    const [selectedDay, setSelectedDay] = useState(today);
    const [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
    const firstDayOfCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

    const newDays = eachDayOfInterval({
        start: startOfWeek(firstDayOfCurrentMonth, { weekStartsOn: 1 }),
        end: endOfWeek(endOfMonth(firstDayOfCurrentMonth), { weekStartsOn: 1 }),
    });
    const handleNextMonth = () => {
        const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: 1 });
        setCurrentMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
    };
    const handlePrevMonth = () => {
        const firstDayOfNextMonth = add(firstDayOfCurrentMonth, { months: -1 });
        setCurrentMonth(format(firstDayOfNextMonth, 'MMM-yyyy'));
    };

    const handleSelectDay = (day) => {
        setSelectedDay(day);
    };

    const handleClick = () => {
        setShow(false);
        onChange(selectedDay);
    };

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
                            <p className={cx('lable')}>{format(firstDayOfCurrentMonth, 'MMMM, yyy', { locale: vi })}</p>
                            <div className={cx('chevron-block')}>
                                <Button
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                    }}
                                    onClick={handlePrevMonth}
                                    className={cx('chevron')}
                                    leftIcon={<ChevronLeftIcon />}
                                />
                                <Button
                                    onMouseDown={(e) => {
                                        e.preventDefault();
                                    }}
                                    onClick={handleNextMonth}
                                    className={cx('chevron')}
                                    leftIcon={<ChevronRightIcon />}
                                />
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
                            {newDays.map((day, index) => (
                                <div
                                    key={day.toString()}
                                    className={cx('day', {
                                        'same-month': isSameMonth(day, firstDayOfCurrentMonth),
                                        today: isEqual(day, today),
                                        selected: isEqual(day, selectedDay),
                                    })}
                                >
                                    <button
                                        onMouseDown={(e) => {
                                            e.preventDefault();
                                        }}
                                        onClick={() => handleSelectDay(day)}
                                    >
                                        <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                                    </button>
                                </div>
                            ))}
                        </div>
                        <Button
                            onMouseDown={(e) => {
                                e.preventDefault();
                            }}
                            onClick={handleClick}
                            className={cx('select-btn')}
                            primary
                        >
                            Chọn
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Calendar;
