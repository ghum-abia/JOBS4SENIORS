import React from "react";
import proposalimage1 from '../../assets/dashboard/proposalimg1.svg'
import clock from '../../assets/dashboard/clock.png'
import wallet from '../../assets/dashboard/wallet.png'
import mappin from '../../assets/dashboard/mappin.png'


const JobList = ({ filteredJobs }) => {
  return (
    <div className=" p-6">
      <h4 className="text-xl font-semibold mb-4">Filtered Jobs</h4>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <div key={job.id} className="p-4">
            <div className="flex">
                <img src="" alt="" />
                <p className="font-medium">{job.title}</p>
                <p className="font-medium">{job.name}</p>
            </div>
            
            <p className="text-sm text-gray-600">{job.experience} | {job.datePosted}</p>

             <div className="flex ml-15">
                                            <div className='flex mr-8 '>
                                                <img src={proposalimage1} alt="" />
                                                <div className='text-[#15411F] font-bold ml-2 md:text-[14px]'>
                                                    Construction
                                                </div>
                                            </div>
                                            <div>
                                            <div className='flex mr-8'>
                                                <img src={clock} alt="" />
                                                <div className='text-[#15411F] font-bold ml-2 md:text-[14px]'>
                                                    <span>30</span>
                                                    <span>/week</span>
                                                </div>
                                            </div>
                                            </div>
                                            <div>
                                            <div className='flex mr-8'>
                                                <img src={wallet} alt="" />
                                                <div className='text-[#15411F] ml-2 font-bold  md:text-[14px]'>
                                                    <span>$20</span>
                                                    <span>hr</span>
            
                                                </div>
                                            </div>
                                            </div>
                                            <div>
                                            <div className='flex mr-8'>
                                                <img src={mappin} alt="" />
                                                <div className='text-[#15411F] ml-2 font-bold  md:text-[14px]'>
                                                    <span>Nigeria</span>
                                                </div>
                                            </div>
                                            </div>
                                        </div>


          </div>
        ))
      ) : (
        <p className="text-gray-500">No matching jobs found.</p>
      )}
    </div>
  );
};

export default JobList;
