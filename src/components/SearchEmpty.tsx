'use client'
import Lottie from 'lottie-react';
import noSearch from '@/assets/noSearch.json';

const SearchEmpty = ():React.ReactElement => {
  return(
  <div className='flex w-screen items-center justify-center'>
  <Lottie animationData={noSearch} />;
  </div>
)};

export default SearchEmpty;
