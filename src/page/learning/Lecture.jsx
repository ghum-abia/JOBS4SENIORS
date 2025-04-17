import { useLocation } from "react-router";
import Navbar from "../../Component/DashboardNavbar.jsx";
import LeftSidebar from "../../Component/DashboardSidebar.jsx";
import { VideoCard } from "../../Component/learning/VideoCard.jsx";
import { Module } from "../../Component/learning/Module.jsx";
import { MdArrowForward } from "react-icons/md";

const Learning = () => {
      let location = useLocation();
      let data = location.state;
      let moduleComplete = false

      return (
            
                  <div className='grid gap-4 mt-16 bg-gray-100 pb-10'>
                        <div className='hidden lg:block '>
                              < Navbar />
                        </div>

                        <div className='flex  justify-between px-20 mt-5 '>
                              {/* Left Sidebar */}
                              <aside className="w-[25%] hidden lg:block" >
                                    <LeftSidebar />
                              </aside>
                              <div className='w-[50%] space-y-5'>
                                    <ul className="flex justify-between bg-white rounded-lg w-[67.5%]">
                                          <li className="text-[#00000075] text-[14px] font-normal px-2 py-3 text-center bg-white hover:bg-flag-green hover:text-white rounded-md w-30">All Courses</li>
                                          <li className="text-[#00000075] text-[14px] font-normal bg-white px-2 py-3 text-center text  hover:bg-flag-green hover:text-white w-40 rounded-md">Enrolled Courses</li>
                                          <li className="text-[#00000075] text-[14px] font-normal bg-white px-2 py-3 text-center text bg-white rounded-md hover:bg-flag-green hover:text-white w-50">Completed Courses</li>
                                    </ul>


                                    <div className="w-[97%] " >
                                          <VideoCard imageurl={data.imageurl} title={data.title} topic={data.topic} lecturer={data.lecturer} duration={data.duration} rating={data.rating} category={data.category} progress={data.progress} />
                                    </div>


                              </div>
                              <div className="w-[25%] h-full ">
                                    <div className=" bg-white rounded-xl px-4 py-5 space-y-28 grid grid-rows-1">
                                          <div className="">
                                                <h1 className="text-xl text-black font-bold">Course Content</h1>
                                                <h1 className="text-sm text-gray-400 font-">Total Lecture Duration: {data.duration}</h1>
                                                <div className="mt-3 space-y-7">
                                                      <Module moduleNo="1" moduleTitle="introduction" moduleStart="00:00" moduleEnd="05:19" moduleCompleted={true} />{/* replace with module status  */}
                                                      <Module moduleNo="2" moduleTitle="introduction" moduleStart="05:22" moduleEnd="09:17" moduleCompleted={true} />
                                                      <Module moduleNo="3" moduleTitle="introduction" moduleStart="00:00" moduleEnd="05:19" moduleCompleted={false} />
                                                      <Module moduleNo="4" moduleTitle="introduction" moduleStart="00:00" moduleEnd="05:19" moduleCompleted={false} />
                                                      <Module moduleNo="5" moduleTitle="introduction" moduleStart="00:00" moduleEnd="05:19" moduleCompleted={false} />
                                                   


                                                </div>


                                          </div>
                                          <div >

                                                {moduleComplete ?
                                                      <button className="bg-flag-green text-white rounded-md px-5 py-2 flex gap-2 active:text-flag-green active:bg-white active:border-flag-green active:border  border border-flag-green hover:opacity-95">
                                                            <span >Take Course Assessment  </span>
                                                            <span className="py-1.5"><MdArrowForward /></span>
                                                      </button>
                                                      :
                                                      <button disabled className="bg-flag-green text-white rounded-md px-5 py-2 flex gap-2 border border-flag-green opacity-50">
                                                            <span >Take Course Assessment  </span>
                                                            <span className="py-1.5"><MdArrowForward /></span>
                                                      </button>
                                                }

                                          </div>
                                    </div>
                              </div>

                        </div>

                  </div >

           

      )
}

export default Learning;