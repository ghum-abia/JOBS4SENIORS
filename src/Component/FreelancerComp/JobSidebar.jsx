import React from 'react'
import profileimg from '../../assets/dashboard/profileimg.png'
import profilebg from '../../assets/dashboard/profilebg.png'
import { BsFilePlus } from 'react-icons/bs'





export default function JobSidebar() {



  return (
    <div>
      <div className="mb-2 bg-white  rounded-2xl shadow-md">
                         <img src={profilebg} alt="" className="" />
                         <div className="pl-2 flex items-center">
                             <div> <img className='rounded-full w-[44px] -mt-8' src={profileimg} alt="" /></div>
                             <div className='flex justify-between w-full'>
                                 <div>
                                 <h2 className="font-normal text-[12px]">Adam Udochi</h2>
                                 <p className="text-sm text-[#00000075] font-normal text-[10px]">UI/UX Designer</p>  
                                 </div>   
                                 <div className='flex items-center -mt-3'>
                                     <div className='bg-[#F6F6F6] rounded w-[61px]'>
                                         <div className= ' border-1 border-[#15411F]  w-[43px]'></div>
                                     </div>
             
                                     <div className='text-[#15411F] font-normal text-[10px] pr-2'>90%</div>
                                 </div>
                              </div>
                         </div>
                         <div className='flex items-center p-2 cursor-pointer pb-3'>
                             <div className='pl-2 text-[#00000075]'><BsFilePlus /></div>
                             <div className=' font-normal text-[10px] text-[#00000075] pl-4'>Add another account</div>
                         </div>
                 
                        
                       </div>
          
    </div>
  )
}
