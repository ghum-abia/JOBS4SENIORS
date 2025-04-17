import React from 'react'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'
import Rightbar from '../../Component/Rightbar'
import ProposalList from '../../Component/FreelancerComp/ProposalList'

function Proposal() {
  return (
    <div>
        <div className="bg-gray-100 gap-4  pb-10 h-screen pt-20 ">
          <div>
        <DashboardNavbar />
        </div>

        <div className="bg-gray-100 gap-4 flex lg:pl-30 lg:pr-20  pb-10 ">
             {/* Left Sidebar */}
     
        <aside className="w-[25%] hidden   lg:block">
        <DashboardSidebar />
       
        </aside>
    
            {/* Main Content */}
          <div className='flex w-[78%]'>
              <div className=" w-screen lg:w-4/5 px-6">
                  <ProposalList />
                      
                  </div>

                    {/* Right Sidebar */}
              <aside className=" w-1/5 hidden lg:block  ">
                    <Rightbar />
              </aside>
            
          </div>
               

        </div>


        </div>

    </div>
  )
}

export default Proposal