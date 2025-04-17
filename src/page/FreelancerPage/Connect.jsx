import React from 'react'
import Connects from '../../Component/FreelancerComp/Connects'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'

function Connect() {
  return (
    <div className="bg-gray-100 gap-4 pb-10 h-screen pt-20 ">
        <div>
        <DashboardNavbar />
        </div>
        <div  className='flex  lg:pl-30 lg:pr-20'>
            <aside className="hidden w-[25%]   lg:block">
            <DashboardSidebar />
          
            </aside>
         {/* Main Content */}
                   <div className=" w-full lg:w-[78%] space-y-2">
                   <Connects />
                        
                   </div>
        </div>
    </div>
  )
}

export default Connect