import React from 'react'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'
import Rightbar from '../../Component/Rightbar'
import ProposalList from '../../Component/FreelancerComp/ProposalList'

function Proposal() {
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
            <div className=" w-screen lg:w-3/5 px-6">
            <ProposalList />
                
            </div>

              {/* Right Sidebar */}
        <aside className=" w-1/5 hidden lg:block  ">
              <Rightbar />
        </aside>
            

        </div>


        </div>

    </div>
  )
}

export default Proposal