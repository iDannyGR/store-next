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
        <div className="flex h-10 w-[90px] cursor-pointer items-center justify-center rounded-3xl border text-center font-semibold">
          <p onClick={()=> setRemProduct({id})}>-</p>
          <input type="text" className="m-2 w-10 text-center" value={item[id].quantity} readOnly/>
          <p onClick={() => setSumProduct({id}) } >+</p>
        </div>
      );
}

export default AddRemoveButton