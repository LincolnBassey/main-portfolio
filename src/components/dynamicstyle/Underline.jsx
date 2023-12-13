import React from 'react'

export default function Underline() {
  return (
    <div className='flex justify-center items-center'>
      <div className='bg-select w-12 h-[2px] rounded-l-lg'></div>
      <div className='bg-select w-8 h-[8px] rounded-lg'></div>
      <div className='bg-select w-12 h-[2px] rounded-r-lg'></div>
    </div>
  )
}
