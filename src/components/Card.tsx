import React from 'react'
import Button from './Button'
import { cardData } from 'data'
import { SideBarImg } from 'assets'

const Card = () => {
  return (
    <div className='text-sm bg-gray-50 rounded-lg py-3 px-3'>
      <h5 className='font-medium text-sm'>{cardData.title}</h5>
      <p className='text-gray-500 text-sm'>{cardData.description}</p>
      <div className='justify-center flex'>
        <img src={SideBarImg} className=" rounded-lg" alt="image" />
      </div>
      <div className='flex row'>
        <Button className='text-gray-500'>{cardData.buttonText1}</Button>&emsp;
        <Button className='text-primary-700'>{cardData.buttonText2}</Button>
      </div>
    </div>
  )
}

export default Card