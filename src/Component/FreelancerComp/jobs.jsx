import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaToolbox } from "react-icons/fa6";
import premuimimg from '../../assets/dashboard/premuimimg.png'
import JobSidebar from './JobSidebar';
import SidebarFilter from "./JobSidebarFilter";
import { useState } from "react";
import {jobListings} from "./JobListings";
import JobList from "./JobList";

// import Button from '@mui/material/Button';


function jobs() {


  const [filters, setFilters] = useState({
    experience: [],
    datePosted: [],
  });

  const [filteredJobs, setFilteredJobs] = useState(jobListings);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarkedJobs, setBookmarkedJobs] = useState([]);


 // Search only filters job titles
 const searchResults = jobListings.filter((job) =>
  job.title.toLowerCase().includes(searchTerm.toLowerCase())
);

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


    // Function to bookmark jobs
    const bookmarkJob = (job) => {
      if (!bookmarkedJobs.some((savedJob) => savedJob.id === job.id)) {
        setBookmarkedJobs([...bookmarkedJobs, job]);
      }
    };

  return (
    <div>
      <div className='flex space-x-4'>
          <aside className="w-1/5 hidden  lg:block">
          <JobSidebar />
       
        </aside>
            
              <div className=' w-3/5 '>
                
                <div className='flex items-center p-2 pl-4 '>
                <CiSearch />
                  {/* <input type="text" placeholder='Search for jobs' className='p-2 w-full outline-none  rounded-lg ' /> */}

                 
                        <input
                         type="text" 
                         placeholder='Search for jobs'
                         className='p-2 w-full outline-none  rounded-lg '
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                         
                        />

                
              </div>
              <div className='flex  bg-[#15411FB0] text-white pl-4  py-8 rounded-b-2xl'>
                <div className='flex items-center pr-10 text-[16px] font-normal'>
                  
                  <FaToolbox className='text-white' size={20} />
                  <span className='font-normal text-[16px] ml-3'>2,000+ new jobs</span>
                </div>
                <div className='flex items-center'>
                <FaToolbox className='text-white' size={20} />
                <span className='font-normal text-[16px] ml-3'>1000+ new proposals</span>
                </div>

              </div>
              </div>
              <div className="w-1/5 hidden   lg:block">
                <aside className=' bg-white  shadow-md rounded-2xl'> 
                                    <div className='bg-white  shadow-md rounded-2xl'>
                                    <img src={premuimimg}  alt="" />
                                    </div>
                                </aside>
              </div>
      </div>
      <div>
        {/* <Button className='{text-red-500 bg-red-500}' variant="contained" >click me</Button> */}

        <div className="flex w-full">
      <SidebarFilter applyFilters={applyFilters} />
      {searchTerm ? (
          <JobList  filteredJobs={searchResults}  bookmarkJob={bookmarkJob} />
        ) : (
          <JobList filteredJobs={filteredJobs} bookmarkJob={bookmarkJob} />
        )}
    </div>
      </div>
    </div>
  )
}

export default jobs