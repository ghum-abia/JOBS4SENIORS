import React from 'react'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'
import ProposalDetail from '../../Component/FreelancerComp/ProposalDetails'


function ProposalDetails() {
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
            <ProposalDetail />
                
            </div>

         
            

        </div>


        </div>
    </div>
  )
}

export default ProposalDetails