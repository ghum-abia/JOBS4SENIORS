import React from 'react'
import profilebg from '../assets/dashboard/profilebg.png'
import profileimg from '../assets/dashboard/profileimg.png'
import { BsFilePlus } from 'react-icons/bs'
import HashTag from './hashtag'
import { LuCirclePlay } from "react-icons/lu";
import { CiBookmarkMinus } from "react-icons/ci";
import Proposalicon from '../assets/dashboard/poposalicon.png'
import { TiUserAddOutline } from "react-icons/ti";
import { MdInsertChartOutlined } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router'


function DashboardSidebar() {
  return (
    <div>
        <div >
                 <div className="mb-2 bg-white  rounded-2xl shadow-md">
                   <img src={profilebg} alt="" className="" />
                   <div className="pl-2 flex items-center">
                       <div> <img className='rounded-full w-[44px] -mt-8' src={profileimg} alt="" /></div>
                       <div className='flex justify-between w-full'>
                           <div>
                           <h2 className="font-normal text-[12px]">Adam Udochi</h2>
                           <p className="text-sm text-[#00000075] font-normal text-[10px]">UI/UX Designer</p>  
                           </div>   
                           <div className='flex items-center -mt-3'>
                               <div className='bg-[#F6F6F6] rounded w-[61px]'>
                                   <div className= ' border-1 border-[#15411F]  w-[43px]'></div>
                               </div>
       
                               <div className='text-[#15411F] font-normal text-[10px] pr-2'>90%</div>
                           </div>
                        </div>
                   </div>
                   <div className='flex items-center p-2 cursor-pointer pb-3'>
                       <div className='pl-2 text-[#00000075]'><BsFilePlus /></div>
                       <div className=' font-normal text-[10px] text-[#00000075] pl-4'>Add another account</div>
                   </div>
           
                  
                 </div>
                 <ul className=" bg-white px-2 rounded-2xl shadow-md">
                    <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
                    <LuCirclePlay className='' size={20} />
                   <li className=" pl-3 ">Learning</li>
                   </div>
                   <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
                    <MdInsertChartOutlined className='' size={20} />
                   <li className=" pl-3 ">Insights</li>
                   </div>
                   <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
                    <TiUserAddOutline  className='' size={20} />
                   <li className=" pl-3 ">Find colleagues</li>
                   </div>
                   <Link to='/Bookmark'>
                   <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
                    <CiBookmarkMinus className='' size={20} />
                   <li className=" pl-3 ">Bookmarks</li>
                   </div>
                   </Link>
                   <div className='flex justify-between hover:bg-gray-200 p-1  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]' >
                    <Link to='/proposal'>
                    <div className='flex content-center'> 
                    <img src={Proposalicon} alt="" className='w-[18px]' />
                   <li className="  rounded-md font-normal text-[14px] text-[#666666] pt-1 pl-3">Proposals </li>
                   </div>
                    </Link>
                   <span className="text-[#FFFFFF] bg-[#15411F] text-[14px] content-center px-4 rounded-2xl">10</span>
                   </div>
                   <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
                    <IoSettingsOutline className='' size={20} />
                   <li className=" pl-3 ">Settings</li>
                   </div>
                 </ul>

                    <div className='bg-white mt-4  shadow-md rounded-2xl pl-2 p-1'>

                               <HashTag />
                       
                        <hr className='text-[#F4F4F4]' />
                     </div>
                 </div>
    </div>
  )
}

export default DashboardSidebar