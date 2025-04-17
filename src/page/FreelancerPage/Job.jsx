import React from 'react'
import DashboardNavbar from '../../Component/DashboardNavbar'
import Jobs from '../../Component/FreelancerComp/jobs'


export default function Job() {
  return (
    <div className='bg-gray-100 gap-4 pb-10 pt-20 h-full '>
        <div className="">
        <DashboardNavbar />
        </div>
        
        <div  className='flex  lg:pl-30 lg:pr-20'>
     
            <div className="w-full ">
            <Jobs />
                
            </div>  

        </div>
        
        </div>   
        
  )
}
