'use client'
import Lottie from 'lottie-react';
import Any from '@/assets/animationLoading.json'
export default function loading():React.ReactElement {
  return (
    <div className='w-full h-full flex items-center justify-center'>
            <Lottie animationData={Any} />
    </div>
  )
}
