import React from 'react'

const SmallCard = ({a,b,c}) => {
  return (
    <div className='bg-white  w-[150px] p-2 rounded-xl flex flex-col justify-center items-center m-3 hover:bg-green-300'>
         <p className='text-2xl font-bold text-orange-400 '>{c}</p>
      <h1 className='text-2xl font-semibold'> {a}/{b} </h1>
     
    </div>
  )
}

export default SmallCard
