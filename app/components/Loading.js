import React from 'react'
import { SkewLoader } from 'react-spinners'

function PreLoading() {
  return (
    <div className='flex justify-center items-center h-[100vh]'>
    <SkewLoader color='#F9A825' size={30}/>
 </div>
  )
}

export default PreLoading;
