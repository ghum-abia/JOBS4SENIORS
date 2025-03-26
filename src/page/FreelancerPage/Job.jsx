import React from 'react'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'
import Jobs from '../../Component/FreelancerComp/jobs'
// import JobSidebar from '../../Component/FreelancerComp/JobSidebar'

export default function Job() {
  return (
    <div>
        <div className="bg-gray-100 min-h-screen">
        <DashboardNavbar />
        
        <div className="flex  pt-25 px-6">
             {/* Left Sidebar */}
     
        {/* <aside className="w-1/5 hidden   lg:block">
        <DashboardSidebar />
        <JobSidebar />
       
        </aside> */}
    
            {/* Main Content */}
            <div className=" w-screen ">
            <Jobs />
                
            </div>

         
            

        </div>
        
        </div>   
        
    </div>
  )
}
