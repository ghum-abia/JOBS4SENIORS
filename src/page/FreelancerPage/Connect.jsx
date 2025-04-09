import React from 'react'
import Connects from '../../Component/FreelancerComp/Connects'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'

function Connect() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
        <DashboardNavbar />
        <div  className='flex pt-25 px-6'>
        <aside className="w-1/5 hidden   lg:block">
        <DashboardSidebar />
       
        </aside>
         {/* Main Content */}
                   <div className=" w-screen lg:w-4/5 px-6">
                   <Connects />
                        
                   </div>
        </div>
    </div>
  )
}

export default Connect