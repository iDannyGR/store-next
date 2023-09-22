import { ChevronDoubleRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface GoToProps{
    id:string
}
export default function GoToOrder({id}:GoToProps) {
  return (
    <Link href={`orders/${id}`}>
      <ChevronDoubleRightIcon className="absolute right-0 top-0 h-6 w-6 hover:cursor-pointer" />
    </Link>
  );
}
