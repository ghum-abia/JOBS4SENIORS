import React from 'react'
import JobDetail from '../../Component/FreelancerComp/Jobdetails'
import DashboardNavbar from '../../Component/DashboardNavbar'

function JobDetails() {
  return (
    <div className="bg-gray-100 min-h-screen">
      
        <DashboardNavbar />
        <div  className='pt-25 px-6'>
        <div className=''>
         <JobDetail />
         </div>
        </div>
    </div>
  )
}

export default JobDetails