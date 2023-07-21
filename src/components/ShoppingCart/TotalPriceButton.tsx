import React from 'react';

type Props = {
    total:number
}

const TotalPriceButton = ({total}: Props) => {
    
  return (
    <button className='absolute bottom-0 w-72 bg-red-500 text-white rounded-md p-3 my-2 hover:bg-red-950'>
      {total ? 'CheckOut $' +  total : 'add a product' }
    </button>
  )
}

export default TotalPriceButton