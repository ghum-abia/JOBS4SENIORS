import { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import { FaToolbox } from 'react-icons/fa6';
import premuimimg from '../../assets/dashboard/premuimimg.png';
import JobSidebar from './JobSidebar';
import { jobListings } from './JobListings';
import JobList from './JobList';
import useJobStore from '../../store/useJobStore';

function Jobs() {
  const [filteredJobs, setFilteredJobs] = useState(jobListings);
  const [searchTerm, setSearchTerm] = useState('');
  const { bookmarkJob } = useJobStore();

  // Search filters job titles
  const searchResults = jobListings.filter((job) =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="flex w-full">
        <aside className="w-[25%] hidden lg:block">
          <JobSidebar />
        </aside>

        <div className="w-full grid lg:w-[75%] space-y-2">
          <div className="flex gap-2">
            <div className="lg:w-[75%]">
              <div className="flex items-center p-2 pl-4">
                <CiSearch />
                <input
                  type="text"
                  placeholder="Search for jobs"
                  className="p-2 w-full outline-none rounded-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex bg-[#15411FB0] text-white pl-4 py-8 rounded-b-2xl">
                <div className="flex items-center pr-10 text-[16px] font-normal">
                  <FaToolbox className="text-white" size={20} />
                  <span className="font-normal text-[16px] ml-3">2,000+ new jobs</span>
                </div>
                <div className="flex items-center">
                  <FaToolbox className="text-white" size={20} />
                  <span className="font-normal text-[16px] ml-3">1000+ new proposals</span>
                </div>
              </div>
            </div>

            {/* Premium Banner */}
            <div className="hidden w-[25%] lg:block">
              <div className="bg-white shadow-md rounded-2xl">
                <img src={premuimimg} className="h-[145px] w-full" alt="" />
              </div>
            </div>
          </div>

          <div className="w-full gap-4">
            <div>
              {searchTerm ? (
                <JobList filteredJobs={searchResults} bookmarkJob={bookmarkJob} />
              ) : (
                <JobList filteredJobs={filteredJobs} bookmarkJob={bookmarkJob} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jobs;