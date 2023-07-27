import React from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline';

type Props = {
    onClick : (value:boolean) => void;
}

const CloseModal = (props: Props):React.ReactElement => {
  return (
    <XMarkIcon
      className="absolute right-1 top-1 h-6 w-6 cursor-pointer text-red-500"
      onClick={() => props.onClick(false)}
    />
  );
}

export default CloseModal