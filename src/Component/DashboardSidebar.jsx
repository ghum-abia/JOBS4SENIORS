// import React from 'react'
import profilebg from '../assets/dashboard/profilebg.png'
import profileimg from '../assets/dashboard/profileimg.png'
import { BsFilePlus } from 'react-icons/bs'
import HashTag from './hashtag'
import { LuCirclePlay } from "react-icons/lu";
import { CiBookmarkMinus } from "react-icons/ci";
import Proposalicon from '../assets/dashboard/poposalicon.png'
import { TiUserAddOutline } from "react-icons/ti";
import { MdInsertChartOutlined } from "react-icons/md";
// import { IoSettingsOutline } from "react-icons/io5";
import { Link } from 'react-router'
import { LuSettings } from "react-icons/lu";
import Progress from './progressbar';
import { useLocation } from 'react-router';


//helloworld  
function DashboardSidebar() {
  const progress = 90;
  const proposal = 10;
  const location = useLocation()
  return (
    <div>
      <div className='grid px-4 gap-2'>
        <div className="mb-2 bg-white  rounded-2xl shadow-md">
          <img src={profilebg} alt="" className="" />
          <div className="pl-2 flex items-center">
            <div> <img className='rounded-full w-[44px] -mt-8' src={profileimg} alt="" /></div>
            <div className='flex justify-between w-full mx-2'>
              <div>
                <h2 className="font-normal text-[12px] text-black">Adam Udochi</h2>
                <p className="text-sm text-[#00000075] font-normal text-[10px]">UI/UX Designer</p>
              </div>
              <div className='flex items-center gap-1'>
                <div className='bg-[#F6F6F6] rounded w-[61px]'>

                  <Progress value={progress} />

                </div>

                <div className='text-[#15411F] font-normal text-[10px] pr-2'>{progress}%</div>
              </div>
            </div>
          </div>
          <div className='flex items-center p-2 cursor-pointer pb-3'>
            <div className='pl-2 text-grayish'><BsFilePlus fontSize={19} className='font-extrabold text-lg' /></div>
            <div className=' font-normal text-[10px] text-[#00000075] pl-4'>Add another account</div>
          </div>


        </div>

        <div >
          <ul className=" bg-white px-3 py-5 rounded-2xl grid gap-2 shadow-md">
            <Link to="/dashboard/learning">
              <div className={location.pathname === "/dashboard/learning" || location.pathname == "/dashboard/learning/lecture" || location.pathname.startsWith("/dashboard/learning") ? "flex hover:bg-gray-200 rounded-md font-normal text-[14px] text-flag-green  p-2" : "flex hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2"}>
                <LuCirclePlay className='' size={20} />
                <li className=" pl-3 ">Learning</li>
              </div>
            </Link>
            <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
              <MdInsertChartOutlined className='' size={20} />
              <li className=" pl-3 ">Insights</li>
            </div>
            <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
              <TiUserAddOutline className='' size={20} />
              <li className=" pl-3 ">Find colleagues</li>
            </div>
            <Link to='/bookmark'>
              <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
                <CiBookmarkMinus className='' size={20} />
                <li className=" pl-3 ">Bookmarks</li>
              </div>
            </Link>
            <div className='flex justify-between hover:bg-gray-200 p-1  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]' >
              <Link to='/proposal'>
                <div className='flex content-center'>
                  <img src={Proposalicon} alt="" className='w-[18px] h-[20px]' />
                  <li className="  rounded-md font-normal text-[14px] text-[#666666] pt-1 pl-3">Proposals </li>
                </div>
              </Link>
              <span className="text-[#FFFFFF] bg-[#15411F] text-[14px] content-center px-4 rounded-2xl">{proposal}</span>
            </div>
            <Link to='/settings'>
              <div className='flex  hover:bg-gray-200 rounded-md font-normal text-[14px] text-[#666666]  p-2'>
                <LuSettings size={20} />
                <li className=" pl-3 ">Settings</li>
              </div>
            </Link>

          </ul>
        </div>

        <div className='bg-white mt-2  shadow-md rounded-2xl p-1'>

          <HashTag />

          </div>
      </div>
    </div>
  )
}

export default DashboardSidebar