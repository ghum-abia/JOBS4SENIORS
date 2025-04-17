import DashboardNavbar from '../../Component/DashboardNavbar'

import ChatPage from '../../Component/FreelancerComp/ChatPage'

function Chatpage() {
  return (
    <div className="bg-gray-100 gap-4 pb-10 pt-20 h-full ">
         <div>
         <DashboardNavbar />
          </div>
          <div>
          <ChatPage />
          </div>
        
         
    </div>
  )
}

export default Chatpage