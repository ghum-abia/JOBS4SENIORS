import React from 'react'
import { Link } from 'react-router'
import premuimimg from '../assets/dashboard/premuimimg.png'
import stevejob from '../assets/dashboard/stevejob.png'
import { BsFilePlus } from 'react-icons/bs';
import { useCommunityStore } from '../store/useCommunityStore';


function DashboardRightbar() {


    const { communities, selectedCommunity, setSelectedCommunity, addCommunity  } = useCommunityStore();

    const handleAddCommunity = () => {
        const newCommunity = {
          id: Date.now(),
          name: `Community ${communities.length + 1}`,
          slug: `community-${communities.length + 1}`,
          icon: '🌐',
        };
        addCommunity(newCommunity);
        setSelectedCommunity(newCommunity);
      };

  return (
    <div>
          <div className="">
                <div className=' bg-white  shadow-md rounded-2xl'>
                    <img src={premuimimg} alt="" />
                </div>
                <div className=' bg-white p-3 shadow-md rounded-2xl mt-4'>
                    <div>
                        <h3 className="font-medium text-[16px]  mb-3">People you may know:</h3>
                        <div className="flex items-center mb-3 cursor-pointer">
                            <div> <img className='rounded-full w-[44px] h-[40px]' src={stevejob} alt="" /></div>
                            <div className='flex justify-between w-full pl-1'>
                                <div>
                                <h2 className="font-normal text-[16px] font-medium text-[#15411F]">Steve Job</h2>
                                <p className="text-sm text-[#00000075]  font-normal text-[10px]">CEO of Apple</p>  
                                </div>   
                                <button className="bg-[#FFFFFF] border-1 text-[#15411F] px-2  font-medium text-[12px] rounded-md mt-1">Connect</button>
                            </div>
                        </div>  
                        <div className=" flex items-center mb-3 cursor-pointer">
                            <div> <img className='rounded-full w-[44px] h-[40px]' src={stevejob} alt="" /></div>
                            <div className='flex justify-between w-full pl-1'>
                                <div>
                                <h2 className="font-normal font-medium text-[#15411F] text-[16px] ">Steve Job</h2>
                                <p className="text-sm text-[#00000075] font-normal text-[10px]">CEO of Apple</p>  
                                </div>   
                                <button className="bg-[#FFFFFF] border-1 font-medium text-[12px] text-[#15411F] px-2 rounded-md mt-1">Connect</button>
                            </div>     
                        </div>
                        <div className=" flex items-center mb-3 cursor-pointer">
                            <div> <img className='rounded-full w-[44px] h-[40px]' src={stevejob} alt="" /></div>
                            <div className='flex justify-between w-full pl-1'>
                                <div>
                                <h2 className="font-normal font-medium text-[#15411F] text-[16px] ">Steve Job</h2>
                                <p className="text-sm text-[#00000075] font-normal text-[10px]">CEO of Apple</p>  
                                </div>   
                                <button className="bg-[#FFFFFF] border-1 font-medium text-[12px] text-[#15411F] px-2 rounded-md mt-1">Connect</button>
                            </div>     
                        </div>
                        <hr className='text-[#15411F] mt-4' />
                        <p className='text-[#15411F] flex justify-center cursor-pointer'>
                             See All
                     </p>
                      </div>
                  </div>
                  <div className=' bg-white mt-4  shadow-md rounded-2xl pl-2 p-1'>
                  {communities.map((community) => (
            <div key={community.id} className="mb-2">
              <div
                onClick={() => setSelectedCommunity(community)}
                className={`w-full text-left font-normal text-[14px] px-3 py-2 rounded ${
                  selectedCommunity?.id === community.id
                    ? ' text-flag-green'
                    : 'hover:bg-gray-200'
                }`}
              >
                <Link
                  to={`/community/${community.slug}`}
                  className="flex items-center gap-2"
                >
                  <span>{community.icon}</span>
                  <span>{community.name}</span>
                </Link>
                </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleAddCommunity}
          className="mt-4 w-full hidden bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          + Add Community
        </button>
                 
                 
                </div>
                </div>

  )
}

export default DashboardRightbar