import React from 'react'
import DashboardNavbar from '../../Component/DashboardNavbar'

import ChatPage from '../../Component/FreelancerComp/chatPage'

function Chatpage() {
  return (
    <div>
         <div className="bg-gray-100 min-h-screen">
         <DashboardNavbar />
         <ChatPage />
         </div>
    </div>
  )
}

export default Chatpage