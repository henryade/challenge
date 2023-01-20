import { MainLogo } from 'assets'
import React, { FC, Fragment } from 'react'
import Search from './Search'
import useSearch from 'hooks/useSearch'
import { sideMenuData } from 'data'
import { Card, Logout } from 'components'

const SideBar: FC<{ width?: string }> = ({ width = "w-3/12 min-w-[200px] max-w-[279px]" }) => {
  const { value, handleChange } = useSearch([], []);
  return (
    <div className={`h-screen flex flex-col justify-between flex-none px-6 py-2 ${width}`}>
      <MainLogo />
      <Search value={value} handleChange={handleChange} />
      {
        sideMenuData.map(({ Image, name }, i: number) => {
          return <Fragment key={name}>
            <div className='flex row capitalize items-center font-medium text-sm pb-3'>
              <Image className='w-12' />
              <span>{name}</span>
            </div>
            {i === 5 && <Fragment><p className='my-3' /></Fragment>}
          </Fragment>
        })
      }
      <Card />
      <hr className="border-1 border-gray-200 my-3" />
      <Logout />
    </div>
  )
}

export default SideBar