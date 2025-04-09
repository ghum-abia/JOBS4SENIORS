import React from 'react'
import {jobListings} from "./JobListings";
import proposalimg from '../../assets/dashboard/proposalimg.svg'
import proposalimage1 from '../../assets/dashboard/proposalimg1.svg'
import clock from '../../assets/dashboard/clock.png'
import wallet from '../../assets/dashboard/wallet.png'
import mappin from '../../assets/dashboard/mappin.png'
import { Link } from "react-router";
import { BsBookmarkPlus } from "react-icons/bs";


export default function Bookmarks() {
  return (
    <div className='bg-white rounded-2xl '>
        <div className="p-6 ">
      <h2 className="text-2xl font-bold mb-4">Bookmarked Jobs</h2>
  
        <ul>
          {jobListings.map((job) => (
            <div key={job.id} className="py-4">
            <div className="flex justify-between">
              <p className="bg-[#3096891A] text-[#309689] font-normal p-1 rounded ">{job.timePosted}<span> ago</span></p>
              <button
                  
                    className=" text-[#15411F] "
                  >
                   <BsBookmarkPlus />
                  </button>
            </div>
            <div className="flex pb-3">
                <img src={proposalimg} alt="" />
                <div className="pl-4 ">
                <p className="font-semibold text-[14px] pt-2">{job.title}</p>
                <p className="text-sm text-gray-600">{job.name}</p>
               
                
                </div>
            </div>
            
            {/* <p className="text-sm text-gray-600">{job.experience} | {job.datePosted}</p> */}

            <div className="flex justify-between">

             <div className="flex pt-4">
                       <div className="flex mr-8">
                         <img src={proposalimage1} alt="" />
                         <div className="text-[#15411F] font-semibold ml-2 md:text-[14px]">
                           {job.category}
                         </div>
                       </div>
                       <div>
                         <div className="flex mr-8">
                           <img src={clock} alt="" />
                           <div className="text-[#15411F] font-semibold ml-2 md:text-[14px]">
                             {job.hoursPerWeek} <span>hrs/week</span>
                           </div>
                         </div>
                       </div>
                       <div>
                         <div className="flex mr-8">
                           <img src={wallet} alt="" />
                           <div className="text-[#15411F] font-semibold ml-2 md:text-[14px]">
                             {job.salary} <span>/hr</span>
                           </div>
                         </div>
                       </div>
                       <div className="flex mr-8">
                           <img src={mappin} alt="" />
                           <div className="text-[#15411F] font-semibold ml-2 md:text-[14px]">
                             {job.location}
                           </div>
                         </div>
                     </div>
                                        <Link to={`/job/${job.id}`}>
                                              <button className="bg-[#15411F] text-white font-normal text-[14px] px-4 py-2 rounded-md ">
                                              Job Details
                                              </button>
                                        </Link>
               </div>


          </div>

            // <li key={job.id} className="p-4">
            //   <h3 className="text-lg font-semibold">{job.title}</h3>
            //   <p className="text-gray-600">{job.experience} - {job.datePosted}</p>
            //   <p className="text-sm text-gray-500">Posted at: {job.timePosted}</p>
            // </li>
          ))}
        </ul>
    
    </div>
    </div>
  )
}
