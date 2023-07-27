import React from 'react'
import { TrashIcon } from '@heroicons/react/24/outline';
import { ShopingCarStore } from '@/store/ShopingCarStore';


type Props = {
    id:number
}

const DeleteProduct = (props: Props) => {
  const { deleteArticle } = ShopingCarStore();

  return (
    <TrashIcon
      className="ml-2 h-6 w-6 cursor-pointer text-rose-800 transition duration-200 ease-in hover:scale-150"
      onClick={() => deleteArticle(props.id)}
    />
  );
}

export default DeleteProduct