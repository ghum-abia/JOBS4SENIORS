import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router";
import clock from '../../assets/dashboard/clock.png'
import wallet from '../../assets/dashboard/wallet.png'
import mappin from '../../assets/dashboard/mappin.png'
import user from '../../assets/dashboard/user.png'
import expertise from '../../assets/dashboard/expertise.png'
import degree from '../../assets/dashboard/degree.png'
import category from '../../assets/dashboard/category.png' 
import clock2 from '../../assets/dashboard/clock2.png'
import wallet2 from '../../assets/dashboard/wallet2.png'
import mappin2 from '../../assets/dashboard/mappin2.png'
import proposalimage1 from '../../assets/dashboard/proposalimg1.svg'
import { BsBookmarkPlus } from "react-icons/bs";
import  {jobListings}  from "./JobListings";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { BiLinkAlt } from "react-icons/bi";

export default function SendProposalDetails() {

    const goback = () => {
        window.history.back();  
    }

    const { id } = useParams();
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file ? file.name : null);
    };
  
    const jobId = parseInt(id, 10);
    if (isNaN(jobId)) {
        return <p className="text-center text-red-500">Invalid job ID.</p>;
    }
  
    const job = jobListings.find((job) => job.id === jobId);

    return (
        <div className='flex gap-4'>
            <div className="p-6 w-full md:w-4/5 bg-[#FCFDFD]  rounded-2xl shadow-md ">
                <div className="flex items-center justify-between">
                    {/* Time Posted & Bookmark Button */}
                    <p className="bg-[#3096891A] text-[#309689] font-normal p-1 rounded "> {job.timePosted} <span>ago</span></p>
                    <button
                        onClick={() => bookmarkJob(job)}
                        className=""
                    >
                        <BsBookmarkPlus />
                    </button>
                </div>
                <div className="flex pt-3">
                    {/* Job Image */}
                    <img src={job.image} alt=""  />
                    <div>
                        <h2 className="text-2xl font-bold ">{job.title}</h2>
                        <p className="text-sm text-gray-600">{job.name}</p>
                    </div>
                </div>
                <div className="flex justify-between pt-4">
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
                </div>
                <p className="font-semibold text-[24px] text-[#666666] mt-10">Job Description</p>
                <p className="text-[#666666] font-normal text-[16px] mb-4 mr-20 mt-6">{job.description}</p>
                <div>
                    <div className="flex justify-between">
                        <p className="text-[#666666] font-normal text-[16px]">Professional Skills</p>
                        <p className="text-[#666666] font-normal text-[16px]">{job.skills}</p>
                    </div>
                </div>
                <div className="flex mt-6 ">
                    <div className="flex mt-2  font-semibold text-[20px] text-[#666666] ">
                        <p>Share Job:</p>
                        <div className="flex ml-2 mt-1">
                            <FaFacebook className="mr-2" />
                            <FaXTwitter  className="mr-2" />
                            <RiLinkedinBoxFill  className="mr-2" />
                        </div>
                    </div>
                </div>
                <div>
                    <form action="">
                        <textarea name="" placeholder='start writing your proposal' className='w-3/5 h-[180px] p-2 border rounded-lg border-[#D9D9D9] focus:outline-none' id=""></textarea>
                        
                        {selectedFile && (
                            <p className="mt-2 text-gray-700">Selected File: {selectedFile}</p>
                        )}
                        
                        <div className='flex m-4'>
                            <button onClick={goback}  className='bg-[#15411F] font-normal text-[14px]  text-[#FFFFFF] rounded-lg p-2 mr-4'>Submit Proposal</button>
                            <button className=' text-[#15411F] rounded-lg p-2 mr-4 font-normal text-[14px]  border-2 border-[#15411F]'>Save Job</button>

                            <button 
                                className=' text-[#15411F]  font-normal  text-[14px] border-2 border-[#15411F]  rounded-lg p-2 mr-4'
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById('fileInput').click();
                                }}
                            >
                            <div className='flex'>
                                <BiLinkAlt className='mt-1' />
                                <span>Attach File</span>
                             </div>
                                
                            </button>
                            <input 
                                type="file" 
                                id="fileInput" 
                                className='hidden'
                                onChange={handleFileChange} 
                            />
                        </div>
                    </form>
                </div>
            </div>

              {/* Right Sidebar */}
                    <div className=" hidden lg:block w-1/5">
                      <aside className='bg-[#FCFDFD] shadow-md rounded-2xl py-4 px-3'> 
                          <div className="text-[#666666] font-bold text-[18px] mb-4">
                           Job Overview
                          </div>
                          <div className="flex items-center  mb-2">
            
                            <img src={user} className="w-[24px] h-[24px]" alt="" />
                            <div  className="pl-2">
                            <p className="text-[#666666] font-normal text-[16px]">Job Title</p>
                            <p className="text-[#666666] font-normal text-[16px]">{job.title}</p>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                          <img src={clock2}  className="w-[24px] h-[24px] " alt="" />
                            <div  className="pl-2">
                            <p className="text-[#666666] font-normal text-[16px]">Job Type</p>
                            <p className="text-[#666666] font-normal text-[16px]">{job.hoursPerWeek} <span>hr/week</span></p>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                          <img src={category} className="w-[24px] h-[24px]" alt="" />
                            <div  className="pl-2">
                            <p className="text-[#666666] font-normal text-[16px]">Category</p>
                            <p className="text-[#666666] font-normal text-[16px]">{job.category}</p>
                            </div>
                          </div>
                          <div className="flex items-center  mb-2">
            
                          <img src={expertise} className="w-[24px] h-[24px]" alt="" />             
                            <div className="pl-2">
                            <p className="text-[#666666] font-normal text-[16px]">Experience</p>
                            <p className="text-[#666666] font-normal text-[16px]">{job.experienceYears}</p>
                            </div>
                          </div>
                        
                          <div className="flex items-center  mb-2">
                          <img src={degree} className="w-[24px] h-[24px]" alt="" />
                            <div  className="pl-2">
                            <p className="text-[#666666] font-normal text-[16px]">Degree</p>
                            <p className="text-[#666666] font-normal text-[16px]">{job.degree}</p>
                            </div>
                          </div>
                         
                          <div className="flex items-center mb-2">
                          <img src={wallet2} className="w-[24px] h-[24px]" alt="" />
            
                            <div  className="pl-2">
                            <p className="text-[#666666] font-normal text-[16px]">Offered Pay</p>
                            <p className="text-[#666666] font-normal text-[16px]">{job.salary}</p>
                            </div>
                          </div>
                          <div className="flex items-center mb-2">
                          <img src={mappin2} className="w-[24px] h-[24px]" alt="" />
                          <div  className="pl-2">
                            <p className="text-[#666666] font-normal text-[16px]">Location</p>
                            <p className="text-[#666666] font-normal text-[16px]">{job.location}</p>
                          </div>
                          </div>
                      </aside>
            
                    </div>
        </div>
    )
}
