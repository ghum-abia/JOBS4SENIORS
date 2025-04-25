import DashboardNavbar from '../../Component/DashboardNavbar'

import ChatPage from '../../Component/FreelancerComp/ChatPage'

function Chatpage() {
  return (
    <div className="bg-gray-100 gap-4 pb-2 pt-20 h-screen overflow-y-hidden">
         <div>
         <DashboardNavbar />
          </div>
          <div className='h-full'>
          <ChatPage />
          </div>
        
         
    </div>
  )
}

export default Chatpage