//Learnt how to do this part with help of this video: https://www.youtube.com/watch?v=9ySmMd5Cjc0&t=150s
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from 'date-fns';
import React, { useEffect, useState } from 'react';
import DueReminder from './DueReminder';

import './Calendar.css';
import { Weekdays } from '../../shared/constants/Weekdays';
import { useDispatch, useSelector } from 'react-redux';
import { getDueDaysForMonth, getTenantsWithDuesByDate } from '../../redux/tenants/tenantsThunks';
import { dayHasDue, getConvertedDate } from '../../shared/services/Helpers';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

let colStartClasses = ['', 'col-start-2', 'col-start-3', 'col-start-4', 'col-start-5', 'col-start-6', 'col-start-7'];

export default function Calendar() {
  const today = startOfToday();
  const [selectedDay, setSelectedDay] = useState(today);
  const [currentMonth, setCurrentMonth] = useState(format(today, 'yyyy-MM'));
  const firstDayCurrentMonth = parse(currentMonth, 'yyyy-MM', new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'yyyy-MM'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'yyyy-MM'));
  }

  const dispatch = useDispatch();
  const dueDaysForSelectedMonth = useSelector((state) => state.tenants.dueDaysForSelectedMonth);
  const tenantsWithDues = useSelector((state) => state.tenants.tenantsWithDues);
  const [formattedDueDays, setFormattedDueDays] = useState([]);

  useEffect(() => {
    dispatch(getDueDaysForMonth(currentMonth)).then(() => {});
  }, [currentMonth, dispatch]);

  useEffect(() => {
    dispatch(getTenantsWithDuesByDate(getConvertedDate(selectedDay)));
  }, [selectedDay, dispatch]);

  useEffect(() => {
    setFormattedDueDays(dueDaysForSelectedMonth.map((date) => date.substring(8, 10)));
  }, [dueDaysForSelectedMonth]);

  return (
    <div className='calendar-reminder'>
      <div className='calendar'>
        <div className='calendar-header'>
          <h2>{format(firstDayCurrentMonth, 'MMMM yyyy')}</h2>
          <div className='button-container'>
            <button
              type='button'
              onClick={previousMonth}
              className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-white hover:text-gray-500'>
              <span className='sr-only'>Previous month</span>
              <ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
            </button>
            <button
              onClick={nextMonth}
              type='button'
              className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-white hover:text-gray-500'>
              <span className='sr-only'>Next month</span>
              <ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
            </button>
          </div>
        </div>

        <div className='calendar-container'>
          {Object.values(Weekdays).map((day) => (
            <h5 key={day}>{day}</h5>
          ))}

          {days.map((day, dayIdx) => (
            <div key={day.toString()} className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'py-1.5')}>
              <button
                type='button'
                onClick={() => setSelectedDay(day)}
                className={classNames(
                  isEqual(day, selectedDay) && 'text-white',
                  !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                  !isEqual(day, selectedDay) && !isToday(day) && isSameMonth(day, firstDayCurrentMonth) && 'text-white',
                  !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-gray-400',
                  isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                  isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                  !isEqual(day, selectedDay) && 'hover:bg-gray-900',
                  (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                  'mx-auto flex h-8 w-8 items-center justify-center rounded-full day-button'
                )}>
                <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
              </button>

              <div className='day-marker-container'>
                {dayHasDue(formattedDueDays, day) && <div className='day-marker w-1 h-1 rounded-full bg-sky-500' />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='reminder'>
        <h2>Reminder</h2>
        <div className='dues text-sm leading-6'>
          {tenantsWithDues.length > 0 ? (
            tenantsWithDues.map((tenantWithDue) => (
              <DueReminder tenantWithDue={tenantWithDue} key={`tenant-${tenantWithDue._id}`} />
            ))
          ) : (
            <p>No due for today</p>
          )}
        </div>
      </div>
    </div>
  );
}
