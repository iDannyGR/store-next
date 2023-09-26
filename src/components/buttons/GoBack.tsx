'use client'
import { useRouter } from 'next/navigation'
const GoBack = ():React.ReactElement => {
    const router = useRouter();
    return (
    <button 
        className='absolute bottom-32 right-72 h-10 w-28 bg-red-500 text-white font-bold rounded-full shadow-xl hover:bg-rose-950'
        onClick={()=> router.back()}>
        Go Back
    </button>
  )
}

export default GoBack