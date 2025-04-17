import React from 'react'
import Notifications from '../../Component/FreelancerComp/Notifications'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'

 function Notification() {
  return (

    <div>
    <div className="bg-gray-100 gap-4 pb-10 h-full pt-20">
      <div>
        <DashboardNavbar />
      </div>

        <div className="flex  lg:pl-30 lg:pr-20">
             {/* Left Sidebar */}
     
        <aside className="w-[25%] hidden   lg:block">
        <DashboardSidebar />
       
        </aside>
    
            {/* Main Content */}
            <div className=" w-screen lg:w-[75%]">
            <Notifications />
                 
            </div>

        </div>
    </div>
  </div>
  )
}
export default Notification