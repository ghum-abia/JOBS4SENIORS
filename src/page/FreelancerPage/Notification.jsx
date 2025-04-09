import React from 'react'
import Notifications from '../../Component/FreelancerComp/Notifications'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'

 function Notification() {
  return (

    <div>
    <div className="bg-gray-100 min-h-screen">
        <DashboardNavbar />

        <div className="flex  pt-25 px-6">
             {/* Left Sidebar */}
     
        <aside className="w-1/5 hidden   lg:block">
        <DashboardSidebar />
       
        </aside>
    
            {/* Main Content */}
            <div className=" w-screen lg:w-4/5 px-6">
            <Notifications />
                 
            </div>

        </div>
    </div>
  </div>
  )
}
export default Notification