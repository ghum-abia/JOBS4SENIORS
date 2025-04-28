import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router'
import feeds from '../../assets/homepage/feeds.png'
import profilebg from '../../assets/dashboard/profilebg.png'
import profileimg from '../../assets/dashboard/profileimg.png'
import { BsFilePlus } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import premuimimg from '../../assets/dashboard/premuimimg.png'
import stevejob from '../../assets/dashboard/stevejob.png'
import DashboardNavbar from '../DashboardNavbar'
import DashboardSidebar from '../DashboardSidebar'
import DashboardRightbar from '../DashboardRightbar'
import Rightbar from '../Rightbar'
import Edit from '../../assets/dashboard/edit.png'
import { CiImageOn } from "react-icons/ci";
import { BsSend, BsCameraVideo } from "react-icons/bs";
import { SlCalender } from "react-icons/sl";
import { TbNotes } from "react-icons/tb";
import Feed from './Feed'

function dashboard() {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="bg-gray-100 gap-4 pb-10 h-full pt-20">
      {/* Navbar */}
    
      <DashboardNavbar />
     
      
      <div className="flex lg:px-20">
        {/* Left Sidebar */}
     
        <aside className="w-[25%] hidden   lg:block">
        <DashboardSidebar />
       
        </aside>

        {/* Main Content */}

        
       
            <main className=" w-screen lg:w-[55%] ">
              {/* Post Input */}

              <div className="  mb-4 mr-4">
                <Feed />
                </div>


                  {/* <form action="">  
                          <div className="bg-white pt-4 rounded-lg shadow-md mb-4">
                          <div className='flex items-center mb-4 pl-4'>
                            < div> <img className='rounded-full w-[35px]' src={profileimg} alt="" /></div>
                            <div className='relative '>
                            <input type="text" onChange={(e) => setText(e.target.value)} placeholder="Write something..."  className="   p-3  outline-none  rounded-md" />
                            {
                              text =='' && (
                                <img src={Edit}  className=' absolute left-36 top-1/2 transform -translate-y-1/2 w-5 h-5' alt="" /> 
                              )
                            }
                          
                            </div>
                        </div>
                        <div className='flex'>
                          <div className="flex justify-between bg-[#15411F7D] p-5 pr-25  w-[90%] rounded-bl-lg">
                                <div className='flex'>
                                <CiImageOn className='text-[#FFFFFF]' size={24} />
                                <p className='text-[16px] fomt-normal text-[#FFFFFF]'>Photo</p>
                                </div>
                                <div className='flex'>
                                <BsCameraVideo className='text-[#FFFFFF]' size={24} />
                                <p className='text-[16px] pl-3 fomt-normal text-[#FFFFFF]'>Video</p>
                                </div>
                                <div className='flex'>
                                <SlCalender className='text-[#FFFFFF]' size={20} />
                                <p className='text-[16px] pl-3 fomt-normal text-[#FFFFFF]'>Events</p>
                                </div>
                                <div className='flex'>
                                <TbNotes className='text-[#FFFFFF]' size={24} />
                                <p className='text-[16px] pl-1 fomt-normal text-[#FFFFFF]'>Photo</p>
                                </div>
                          </div>
                          <div className='w-[10%]'>
                          <div className='flex bg-[#15411FD9] p-5 rounded-br-lg'>
                          <BsSend  className='text-[#FFFFFF] ' size={24} />
                        
                          </div>
                          </div>
                        </div>
                      </div>
              </form>     */}

              {/* Feed Post */}
              {/* <div className='h-[500px]'>
                    <div className="bg-white p-4 rounded-2xl h-[500px] shadow-md">
                    <div className=" flex items-center">
                            <div> <img className='rounded-full w-[44px]' src={profileimg} alt="" /></div>
                            <div className='flex justify-between w-full pl-3'>
                                <div>
                                <h2 className="font-normal text-[12px] ">Adam Udochi</h2>
                                <p className="text-sm text-[#00000075] font-normal text-[10px]">UI/UX Designer</p>  
                                </div>   
                                <BsThreeDotsVertical />
                            </div>

                            
                        </div>
                        <p className="mt-2">Healthy Tracking App</p>
                        <div className="mt-2   rounded-md"><img className='h-[307px] w-full' src={feeds} alt="" /></div>
                        <div className="flex justify-between mt-2">
                        <button className="text-green-600">👍 99</button>
                        <button className="text-gray-600">💬 Comment</button>
                        <button className="text-gray-600">🔗 Share</button>
                        </div>
                    </div>
              </div> */}
            </main>

            {/* Right Sidebar */}
            <aside className=" w-[20%] hidden lg:block  pl-4">
                  <Rightbar />
            </aside>
      

      </div>
    </div>

    </div>
  )
}

export default dashboard