import { LogoutLogo } from 'assets';
import { UserContext } from 'context/user';
import React from 'react'
import { useContext } from 'react';
import Button from './Button';

const Logout = () => {
  const user = useContext(UserContext);
  return (
    <div className="flex row justify-between">
      <div className="w-10/12 flex flex-col">
        <span className="capitalize font-semibold break-all leading-none mb-2">
          {user?.name}
        </span>
        <span className={`text-small break-all font-light leading-none`}>
          {user?.email}
        </span>
      </div>
      <div className="w-2/12 flex justify-center items-center">
        <Button
          variant="link"
          color="none"
        >
          <LogoutLogo />
        </Button>
      </div>
    </div>
  )
}

export default Logout