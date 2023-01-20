import React, { FC } from 'react'
import { SearchLogo } from 'assets'
import { ISearchProps } from 'interfaces'

const Search: FC<ISearchProps> = ({ value, handleChange }) => {
  return (
    <div className="border rounded-lg border-gray-300 flex row w-full my-2">
      <span className="pl-3 pr-2 flex rounded-l-lg justify-center items-center bg-white">
        <SearchLogo />
      </span>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Search"
        className="placeholder:text-gray-500 rounded-r-lg px-4 py-1 text-gray-900 outline-0 w-full"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  )
}

export default Search