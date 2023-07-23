import React from 'react';
import { Link } from 'react-router-dom';

export default function Reminder({ due, date }) {
  return (
    <Link to='/tenants'>
      <li className='flex items-center px-4 py-2 group rounded-xl hover:bg-gray-900'>
        <img src={due.imageUrl} alt='tenantImg' className='flex-none w-10 h-10 rounded-full' />
        <div className='flex-auto'>
          <p className='font-bold'>{due.name}</p>
          <p>Bill For: Property #1</p>
          <p> Amount Due: $3000</p>
          <p> Due Date: {date}</p>
        </div>
      </li>
    </Link>
  );
}
