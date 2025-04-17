import React from 'react'
import { useState } from 'react';
import useProfileStore from '../../store/profileStore';
import {  EllipsisVertical, MapPin, SquarePen,Upload, PlayCircle } from 'lucide-react'
import ProfileTab from './ProfileTab';
import ActivityTab from './ActivityTab';
import ArticlesTab from './ArticlesTab';

function profilecomp() {

    const { profile, stats, visitors, courses } = useProfileStore();

    const [activeTab, setActiveTab] = useState('profile');

    const renderTabContent = () => {
      switch (activeTab) {
        case 'profile':
          return <ProfileTab />;
        case 'activity':
          return <ActivityTab />;
        case 'articles':
          return <ArticlesTab />;
        default:
          return <ProfileTab />;
      }
    };


  return (
    <div>
          <div className=" flex gap-4 px-4 gap-4 py-6  ml-[40px]  ">
                <div className="flex gap-8 w-full">
                    {/* Main Content */}
                    <div className="flex-1">
                    {/* Cover Image */}
                    <div className='bg-white shadow-md rounded-lg mb-6 pb-4'>
                                <div className="relative h-50 w-full">
                                    <img
                                    src={profile.coverImage}
                                    alt="Cover"
                                    className="w-full h-full object-cover"
                                    />
                                    <div className="absolute  top-4 flex left-4 gap-2">

                                    <button variant="ghost" className="bg-white/80 py-1 px-2 rounded backdrop-blur-sm">
                                        < Upload  className="h-4 w-4" />
                                    </button>
                                    </div>
                                    <div className="absolute  top-4 flex right-4 gap-2">
                                    <button variant="ghost" className="bg-white/80 p-2 rounded flex backdrop-blur-sm">
                                        <SquarePen className="h-4 mr-2  w-4" />
                                        <span className='font-normal text-[12px]'>EDIT PROFILE</span>
                                    </button>
                                    <button variant="ghost" className="bg-white/80 py-1 px-2 rounded backdrop-blur-sm">
                                        < EllipsisVertical className="h-4 w-4" />
                                    </button>
                                    </div>
                                </div>

                            {/* Profile Info */}
                            
                                <div className="px-8 -mt-10 relative mb-6">
                                        <div className="flex items-center">
                                            <img
                                            src={profile.avatar}
                                            alt={profile.name}
                                            className="w-42 h-42 rounded-full border-4 border-white shadow-lg"
                                            />
                                            <div className='ml-6 pt-15'>
                                                <div className=" flex justify-between">
                                                        <div className="text-[18px] text-[#181818] font-bold">{profile.name}</div>
                                                        <div className="flex items-center  justify-end ml-30 text-gray-600 mt-1">
                                                            <MapPin className="h-4 w-4 mr-1" />
                                                            <span className='text-[12px] font-normal'>{profile.location}</span>
                                                        </div>
                                                </div>
                                                <div>
                                                    <span className="text-[#181818] text-[14px] font-normal">
                                                        {profile.bio}
                                                    </span>
                                                </div>
                                                <div className="flex gap-3 mt-2">
                                                <button className=' bg-flag-green text-[12px] font-semibold text-white  px-10 rounded '>CONTACT INFO</button>
                                                <button className='border border-flag-green text-[12px] py-2 font-semibold text-flag-green px-6 rounded'>{profile.connections} CONNECTIONS</button>
                                            </div>
                                            </div>
                                        </div>
                                        
                                </div>
                    </div>



                        {/* Tabs */}
                        <div className="border-b border-[#E7E7E7] ">
                        <nav className="flex">
                            <button
                            onClick={() => setActiveTab('profile')}
                            className={` px-18   text-[12px] bg-[#FFFFFF] border border-[#E7E7E7] font-semibold  transition-colors ${
                                activeTab === 'profile'
                                ? 'text-[#FFFFFF]  border-b-2 bg-flag-green py-4 rounded-t-lg border-flag-green'
                                : 'text-[#181818] hover:text-gray-700'
                            }`}
                            >
                            PROFILE
                            </button>
                            <button
                            onClick={() => setActiveTab('activity')}
                            className={`px-18  text-[12px] bg-[#FFFFFF] border border-[#E7E7E7] font-semibold transition-colors ${
                                activeTab === 'activity'
                                ? 'text-[#FFFFFF]  border-b-2 bg-flag-green  py-4 rounded-t-lg border-flag-green'
                                : 'text-[#181818] hover:text-gray-700'
                            }`}
                            >
                            ACTIVITY & INTERESTS
                            </button>
                            <button
                            onClick={() => setActiveTab('articles')}
                            className={`px-18  text-[12px] bg-[#FFFFFF] border border-[#E7E7E7] font-semibold transition-colors ${
                                activeTab === 'articles'
                                ? 'text-[#FFFFFF]  border-b-2 bg-flag-green py-4 rounded-t-lg border-flag-green'
                                : 'text-[#181818] hover:text-gray-700'
                            }`}
                            >
                            ARTICLES (3)
                            </button>
                        </nav>
                        </div>

                        {/* Tab Content */}
                        <div className="mt-6">
                        {renderTabContent()}
                        </div>
                    
                    </div>

                

                </div>
                  {/* right side */}
        <div className=" ">
          {/* <Stats />
          <Visitors />
          <Courses /> */}
        <div className='bg-white shadow-md rounded-lg p-6 mb-6'>
                <div className="flex justify-between items-center gap-4 mb-6">
                <h2 className="text-[12px] font-meduim  text-gray-900">YOUR DASHBOARD</h2>
                <button className="text-[12px] font-meduim text-flag-green underline cursor-pointer">GO TO STATS</button>
                  </div>
            
            <div className="space-y-8">
                <div>
                <span className="text-[40px] font-medium text-flag-green">${stats.earnings.toLocaleString()}</span>
                <p className="text-[#181818] text-normal text-[14px]">Total earnings</p>
                </div>
                
                <div>
                <span className="text-[40px] font-medium text-flag-green">{stats.totalJobs}</span>
                <p className="text-[#181818] text-normal text-[14px]">Total jobs</p>
                </div>
                
                <div>
                <span className="text-4xl font-medium text-green-800">{stats.totalHours}</span>
                <p className="text-[#181818] text-normal text-[14px]">Total hours</p>
                </div>
            </div>
        </div>

        <div className='bg-white shadow-md rounded-lg p-6 mb-6'>
                        <div className="flex justify-between items-center mb-6">
                        <h2 className="text-[12px] text-[#181818]  font-semibold ">VISITORS</h2>
                        <button className="text-[12px] text-flag-green font-semibold cursor-pointer">VIEW ALL</button>
                    </div>
                    
                    <div className="space-y-4">
                        {visitors.map((visitor) => (
                        <div key={visitor.id} className="flex items-center gap-3">
                            <img 
                            src={visitor.avatar} 
                            alt={visitor.name}
                            className="w-10 h-10 rounded-full object-cover"
                            />
                            <div>
                            <h3 className="font-medium text-gray-900">{visitor.name}</h3>
                            <p className="text-sm text-gray-600">{visitor.position}</p>
                            </div>
                        </div>
                        ))}
                    </div>
        </div>


        <div className='bg-white shadow-md rounded-lg p-6 mb-8'>
                    <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-semibold text-gray-900">YOU MAY LIKE THESE COURSES</h2>
                </div>
                
                <div className="space-y-4">
                    {courses.map((course) => (
                    <div key={course.id} className="flex gap-3">
                        <div className="relative w-20 h-14 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <PlayCircle className="w-6 h-6 text-white" />
                        </div>
                        </div>
                        <div>
                        <h3 className="font-medium text-[14px] text-[#181818] ">{course.title}</h3>
                        <p className="text-normal text-[10px] text-[#181818] ">{course.viewers.toLocaleString()} viewers</p>
                        </div>
                    </div>
                    ))}
                </div>
                
                <button className=" cursor-pointer underline text-flag-green font-semibold text-[12px] mt-6">
                    SEE ALL RECOMMENDATIONS
                </button>
        </div>



          
        </div>

    </div>
    </div>
  )
}

export default profilecomp