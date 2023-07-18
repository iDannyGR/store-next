'use client'

import React from 'react';
import { ShopingCarStore } from '@/store/ShopingCarStore';
type Props = {
  id:number
}

const AddRemoveButton = ({id}: Props):React.ReactElement => {
      
      const {setSumProduct, setSustProduct, item } = ShopingCarStore();
    console.log(item);
  
      return (
    <div className='flex items-center justify-center border w-[90px] h-10 rounded-3xl text-center font-semibold cursor-pointer'>
        <p onClick={()=> setSustProduct(id)}>-</p>
        <input 
            type="text" 
            className='text-center w-10 m-2'/>
        <p onClick={()=> setSumProduct(id)}>+</p>
    </div>
  )
}

export default AddRemoveButton