//Learnt how to do this part with help of this video: https://www.youtube.com/watch?v=9ySmMd5Cjc0&t=150s
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';
import React from 'react';
import { useState } from 'react';
import Reminder from './Reminder';

const dues = [
  {
    id: 1,
    name: 'Leslie Alexander',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&usqp=CAU',
    startDatetime: '2023-07-11T13:00',
  },
  {
    id: 2,
    name: 'Michael Foster',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&usqp=CAU',
    startDatetime: '2023-07-20T09:00',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&usqp=CAU',
    startDatetime: '2023-07-20T17:00',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&usqp=CAU',
    startDatetime: '2023-07-09T13:00',
  },
  {
    id: 5,
    name: 'Michael Foster',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-Pnt1rnG5_oeghvwAVvVBhcLrR5yZRqLRFw&usqp=CAU',
    startDatetime: '2023-07-13T14:00',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

let colStartClasses = [''];

export default function Calendar() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState(today);
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'));
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'));
  }

  let selectedDayDues = dues.filter((due) => isSameDay(parseISO(due.startDatetime), selectedDay));

  return (
    <div className='pt-16'>
      <div className='max-w-md px-4 mx-auto sm:px-7 md:max-w-4xl md:px-6'>
        <div className='md:grid md:grid-cols-2 md:divide-x '>
          <div className='md:pr-14'>
            <div className='flex items-center'>
              <h2 className='flex-auto'>{format(firstDayCurrentMonth, 'MMMM yyyy')}</h2>
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
            <div className='grid grid-cols-7 mt-10 text-xs leading-6 text-center text-white'>
              <div>S</div>
              <div>M</div>
              <div>T</div>
              <div>W</div>
              <div>T</div>
              <div>F</div>
              <div>S</div>
            </div>
            <div className='grid grid-cols-7 mt-2 text-sm'>
              {days.map((day, dayIdx) => (
                <div
                  key={day.toString()}
                  className={classNames(dayIdx === 0 && colStartClasses[getDay(day)], 'py-1.5')}>
                  <button
                    type='button'
                    onClick={() => setSelectedDay(day)}
                    className={classNames(
                      isEqual(day, selectedDay) && 'text-white',
                      !isEqual(day, selectedDay) && isToday(day) && 'text-red-500',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        isSameMonth(day, firstDayCurrentMonth) &&
                        'text-white',
                      !isEqual(day, selectedDay) &&
                        !isToday(day) &&
                        !isSameMonth(day, firstDayCurrentMonth) &&
                        'text-gray-400',
                      isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                      isEqual(day, selectedDay) && !isToday(day) && 'bg-gray-900',
                      !isEqual(day, selectedDay) && 'hover:bg-gray-900',
                      (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                      'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                    )}>
                    <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'd')}</time>
                  </button>

                  <div className='w-1 h-1 mx-auto mt-1'>
                    {dues.some((due) => isSameDay(parseISO(due.startDatetime), day)) && (
                      <div className='w-1 h-1 rounded-full bg-sky-500'></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <section className='mt-12 md:mt-0 md:pl-14'>
            <h2>Reminder</h2>
            <ol className='mt-4 space-y-1 text-sm leading-6'>
              {selectedDayDues.length > 0 ? (
                selectedDayDues.map((due) => (
                  <Reminder
                    due={due}
                    key={due.id}
                    date={
                      <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>{format(selectedDay, 'MMM dd, yyy')}</time>
                    }
                  />
                ))
              ) : (
                <p>No Due for today</p>
              )}
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
}
