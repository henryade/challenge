import { IPaymentCard } from 'interfaces'
import React, { FC } from 'react'
import Button from './Button'
import { RadioInput } from './Input'
import { TickBox } from 'assets'

const PaymentCard: FC<IPaymentCard> = ({ Logo, cardType, expiryDate, endingNumbers, isDefault, handleClick }) => {
  return (
    <Button className={`w-full p-4 mb-3 bg-white border rounded-lg cursor-pointer text-left  ${isDefault ? "hover:border-primary-700 text-blue-600 border-blue-600 bg-primary-50" : "hover:border-primary-300 border-gray-200 "}`} onClick={handleClick}>
      <div className='flex row justify-between w-full'>
        <div className='flex row'>
          {Logo && <div><Logo /></div>}
          <div className='ml-3'>
            <div>
              <p className='text-gray-700'>{`${cardType} ending in ${endingNumbers}`}</p>
              <p className='text-gray-500'>{`Expiry ${expiryDate}`}</p>
            </div>
            <div className='mt-2'>
              <Button variant='link' className='text-gray-500 peer-checked:text-primary-500'>Set as default</Button>
              &emsp;
              <Button variant='link' className='text-primary-700'>Edit</Button>
            </div>
          </div>
        </div>
        <div>
          <TickBox isDefault={isDefault} />
        </div>
      </div>
    </Button>
  )
}

export default PaymentCard