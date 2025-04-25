import Connects from '../../Component/FreelancerComp/Connects'
import DashboardNavbar from '../../Component/DashboardNavbar'
import DashboardSidebar from '../../Component/DashboardSidebar'

function Connect() {
  return (
    <div className="bg-gray-100 gap-4 pb-10 h-screen pt-20 ">
        <div>
        <DashboardNavbar />
        </div>
        <div  className='flex  lg:px-20'>
            <aside className="hidden w-[25%]   lg:block">
            <DashboardSidebar />
          
            </aside>
         {/* Main Content */}
                   <div className=" w-full lg:w-[75%] space-y-2">
                   <Connects />
                        
                   </div>
        </div>
    </div>
  )
}

export default Connect