import React from 'react'

type Props = {}

const OrderCard = (props: Props) => {
  return (
    <article className="h-auto w-[500px] rounded-xl border">
      <p>Order ID: </p>
      <p>Date:</p>
      <div className="flex w-full flex-col items-center justify-center ">
        <p className="font-bold">Products</p>
      </div>
      <div className="flex justify-around">
        <p className="font-bold">Quantity: </p>
        <p className="font-bold">Total: $ </p>
      </div>
    </article>
  );
}

export default OrderCard