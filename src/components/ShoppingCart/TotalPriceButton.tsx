'use client'
import { useTotalPrice } from './useTotalPrice';


const TotalPriceButton = ():React.ReactElement => {
  const { Products, handleSubmit, totalPrice} = useTotalPrice();
  return (
    <button
      className="my-2 w-72 rounded-md bg-red-500 p-3 text-white hover:bg-red-950"
      onClick={() => handleSubmit()}
      disabled={Products.length === 0}
    >
      {totalPrice ? 'Check Out $' + totalPrice : 'add a product'}
    </button>
  );
}

export default TotalPriceButton