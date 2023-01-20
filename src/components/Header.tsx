import { HamburgerLogo, BigLogo } from 'assets'
import React, { FC } from 'react'
import Button from './Button'

const Header: FC<{ handleClick: () => void }> = ({ handleClick }) => {
  return (
    <div className='flex row items-center justify-between bg-white py-3 px-3'>
      <BigLogo />
      <Button variant={'link'} onClick={handleClick}>
        <HamburgerLogo />
      </Button>
    </div>
  )
}

export default Header