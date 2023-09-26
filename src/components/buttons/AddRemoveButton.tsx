'use client'
import React from 'react';
import { ShopingCarStore } from '@/store/ShopingCarStore';
import { useStoreProducts } from '@/hooks/useStoreProducts';

type Props = {
  id:number
}

const AddRemoveButton = ({id}: Props):React.ReactElement => {
      
      const { item } = ShopingCarStore();
       const { setRemProduct, setSumProduct}= useStoreProducts()
  
      return (
        <div className="flex h-7 w-[90px] border-x-2 border-slate-400 rounded-md cursor-pointer items-center justify-center text-center font-semibold">
          <p onClick={()=> setRemProduct(id)}>-</p>
          <input type="text" className="m-2 w-7 text-center" value={item[id]?.quantity} readOnly/>
          <p onClick={() => setSumProduct(id) } >+</p>
        </div>
      );
}

export default AddRemoveButton