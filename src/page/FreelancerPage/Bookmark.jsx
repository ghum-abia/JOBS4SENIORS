import React from 'react'
import Bookmarks from '../../Component/FreelancerComp/Bookmarks'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'

 function Bookmark() {
  return (

    <div>
    <div className="bg-gray-100 gap-4 pb-10 h-screen pt-20">
        <DashboardNavbar />

        <div className="flex lg:pl-30 lg:pr-20">
             {/* Left Sidebar */}
     
        <aside className="w-[25%] hidden   lg:block">
        <DashboardSidebar />
       
        </aside>
    
            {/* Main Content */}
            <div className=" w-screen lg:w-[78%]">
            <Bookmarks />
                 
            </div>

        </div>
    </div>
  </div>
  )
}
export default Bookmark