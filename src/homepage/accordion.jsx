import React from 'react'
import { useState } from 'react'

function accordion({tittle, content}) {

    const [clicked, setClicked] = useState(false)

  return (
    <div>
         <div>
                <div onClick={() => setClicked(!clicked)} className='flex justify-between pb-4'>
                    <div className='font-semibold text-[20px]'>{tittle}</div>
                    <div className='font-semibold'>{clicked ? "-" : "+"}</div>
                </div>
                {clicked && <div className=' pb-4 font-normal text-[18px] pb-3 text-[#333333]'>{content}</div>}
                <hr className='pb-6' /> 
            </div>  
    </div>
  )
}

export default accordion