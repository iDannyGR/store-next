import React from 'react';
import Image from 'next/image';
import Headphones from '@/assets/headphones.jpg'
type Props = {}

const card = (props: Props) => {
  return (
    <div className='h-60 w-56 cursor-pointer bg-white'>
      <figure className='relative mb-2 h-4/5 w-full'>
        <span className='absolute bottom-0 left-0 bg-white/60'>Electronics</span>
        <Image src={'/src/assets/headphones.jpg'} width={300} height={350} alt={'a headphones'} />
        <span className=''>headphone</span>
        <span className='font-bold'>$300</span>
      </figure>
    </div>
  );
}

export default card