'use client'

import React, { useState } from 'react'

function Search() {
  const [search, setSearch] = useState('')
  return (
    <>
      <div className='flex justify-center items-center'>
        {/* <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
        Search
      </label> */}
        <div className="mt-10">
          <div className="flex items-center justify-center rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-pizza-red">
            <input
              // value={setSearch}
              onChange={e => setSearch(e.target.value)}
              name="Search"
              type="text"
              placeholder="Search for item by Title..."
              className="block w-90 lg:w-180 grow py-4 px-5 text-base text-pizza-black placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            />

            <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6 py-2 px-5">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

            </div>

          </div>
          {search}
        </div>
      </div>
    </>
  )
}

export default Search
