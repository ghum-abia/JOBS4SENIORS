import { useState } from 'react'
import profileimg from '../../assets/dashboard/profileimg.png'
import profilebg from '../../assets/dashboard/profilebg.png'
import { BsFilePlus } from 'react-icons/bs'
import SidebarFilter from "./JobSidebarFilter";
import { jobListings } from "./JobListings";
import Progress from '../progressbar';

export default function JobSidebar() {

const progress = 90;

  const [filteredJobs, setFilteredJobs] = useState(jobListings);

  // Apply filters function
  const applyFilters = (filters) => {

    let filteredResults = jobListings.filter((job) => {
      const experienceMatch =
        filters.experience.length === 0 || filters.experience.includes(job.experience);

      const dateMatch =
        filters.datePosted.includes("All") ||
        filters.datePosted.length === 0 ||
        filters.datePosted.includes(job.datePosted);

      return experienceMatch && dateMatch;
    });



    setFilteredJobs(filteredResults);
  };


  return (
    <div className='grid space-y-4 px-4 gap-2'>
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

      <div className='hidden lg:block'>
        <SidebarFilter applyFilters={applyFilters} />
      </div>

    </div>
  )
}
