import React from 'react'

export default function Search() {
  return (
    <div className='flex justify-center items-center'>
      {/* <label htmlFor="price" className="block text-sm/6 font-medium text-gray-900">
        Search
      </label> */}
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            id="price"
            name="price"
            type="text"
            placeholder="Search for item by Title..."
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
          <div className="shrink-0 text-base text-gray-500 select-none sm:text-sm/6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>

          </div>


        </div>
      </div>
    </div>
  )
}
