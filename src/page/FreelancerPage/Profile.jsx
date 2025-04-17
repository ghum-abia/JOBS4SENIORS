import React from 'react'
import Profilecomp from '../../Component/FreelancerComp/profilecomp'
import DashboardNavbar from '../../Component/DashboardNavbar'


export default function Profile() {
  return (
    <div>
        <div className="bg-gray-100 gap-4 pb-10 h-full pt-20 ">
          <div>
        <DashboardNavbar />
        </div>
        
        {/* <div className="flex  lg:pl-30 lg:pr-20"> */}
        
        <div className="flex  lg:pl-30 lg:pr-20">
    
            <div className=" w-full ">
            <Profilecomp />
                 
            </div>  

        </div>
        
        </div>

    </div>
  )
}
