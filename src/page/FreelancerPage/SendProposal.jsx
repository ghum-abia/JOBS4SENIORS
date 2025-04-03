import React from 'react'
import DashboardNavbar from '../../Component/DashboardNavbar'
import SendProposalDetails from '../../Component/FreelancerComp/SendProposalDetails'

export default function SendProposal() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen">
      
        <DashboardNavbar />
        <div  className='pt-25 px-6'>
        <div className=' rounded-lg shadow-md'>
         <SendProposalDetails />
         </div>
         <div className='w-1/5 hidden lg:block'>

         </div>
        </div>
    </div>
    </>
  )
}
