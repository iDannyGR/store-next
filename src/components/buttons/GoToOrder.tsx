'use client'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface GoToProps{
    id:string
}
export default function GoToOrder({id}:GoToProps) {
  return (
    <div className="absolute right-0 flex h-full w-8 items-center justify-center rounded-r-lg bg-black hover:cursor-pointer">
      <Link href={`orders/${id}`}>
        <ChevronDoubleRightIcon className='h-6 w-6 text-white'/>
      </Link>
    </div>
  );
}
