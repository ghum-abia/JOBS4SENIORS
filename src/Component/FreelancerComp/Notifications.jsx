import React from 'react'
import { useState } from "react";
import { BsThreeDots } from "react-icons/bs";




function Notifications() {

const [activeTab, setActiveTab] = useState("notifications");


const recentNotifications= [

    {
        id: "1",
        content: "You appeared in 9 searches this week",
        time: "9 hours",
        profilePics: [
          
          "https://randomuser.me/api/portraits/men/43.jpg",
          "https://randomuser.me/api/portraits/men/32.jpg",
          "https://randomuser.me/api/portraits/women/56.jpg"
        ],
        type: "view"
      },

    {
      id: "2",
      content: "Audrey Alexander and 10 others viewed your profile",
      time: "9 hours",
      profilePics: [
        "https://randomuser.me/api/portraits/women/22.jpg",
        "https://randomuser.me/api/portraits/men/43.jpg",
        "https://randomuser.me/api/portraits/women/56.jpg"
      ],
      type: "view"
    },
    {
      id: "3",
      content: "Eduardo Russel and 4 others liked your post +1,000 connections! My network growth, so many...",
      time: "12 hours",
      profilePics: [
        "https://randomuser.me/api/portraits/men/75.jpg",
        "https://randomuser.me/api/portraits/women/35.jpg",
        "https://randomuser.me/api/portraits/men/41.jpg"
      ],
      type: "like"
    }
  ];

  const earlierNotifications = [
    {
      id: "4",
      content: "We found jobs that you may be interested",
      time: "2 day ago",
      profilePics: ["https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg",
        "https://randomuser.me/api/portraits/men/32.jpg"

      ],
      type: "job",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
    },
    {
      id: "5",
      content: "Kyle Fisher and 17 others viewed your profile",
      time: "9 hours",
      profilePics: [
        "https://randomuser.me/api/portraits/men/41.jpg",
        "https://randomuser.me/api/portraits/women/22.jpg",
        "https://randomuser.me/api/portraits/men/43.jpg"
      ],
      type: "view"
    },
    {
        id: "6",
        content: "Kyle Fisher and 17 others viewed your profile",
        time: "9 hours",
        profilePics: [
          "https://randomuser.me/api/portraits/men/41.jpg",
          "https://randomuser.me/api/portraits/women/22.jpg",
          "https://randomuser.me/api/portraits/men/43.jpg"
        ],
        type: "view"
      }
    
  ];


  return (
    <>
        <div className='bg-white rounded-2xl'>
            <div>
            <div className="flex-1 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold  mb-6">Notification</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="flex w-[600px] border-b">
            <button
              onClick={() => setActiveTab("notifications")}
              className={`flex-1 py-4 font-medium rounded-t-lg text-center transition-colors ${
                activeTab === "notifications"
                  ? "bg-[#15411F] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              NOTIFICATIONS
            </button>
            <button
              onClick={() => setActiveTab("settings")}
              className={`flex-1 py-4  rounded-t-lg font-medium text-center transition-colors ${
                activeTab === "settings"
                  ? "bg-[#15411F] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              NOTIFICATION SETTINGS
            </button>
          </div>
          
          <div>
            {activeTab === "notifications" && (
              <div className="p-4">
                <h2 className="text-sm font-bold text-gray-500 flex justify-center uppercase mb-6 px-2">RECENT</h2>
                
                <div className="space-y-4">
                  {recentNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-start p-2 rounded-lg hover:bg-gray-50">
                      <div className="mr-3 flex-shrink-0">
                        
                          <div className="relative flex">
                            {notification.profilePics.slice(0, 3).map((pic, index) => (
                              <img 
                                key={index}
                                src={pic} 
                                alt="Profile" 
                                className={`w-12 h-12 rounded-full  ${index > 0 ? '-ml-4' : ''}`}
                                style={{ zIndex: 3 - index }}
                              />
                            ))}
                          </div>
                        
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-[#181818] font-meduim text-[14px]">{notification.content}</p>
                        <p className="text-[#181818] text-sm font-[10px]">{notification.time}</p>
                      </div>
                      
                      <button className="flex-shrink-0 p-1 rounded-full hover:bg-gray-200">
                        <BsThreeDots  size={30}  />
                      </button>
                    </div>
                  ))}
                </div>
                
                <h2 className="text-sm font-bold text-gray-500 uppercase my-6 px-2">EARLIER</h2>
                
                <div className="space-y-4">
                  {earlierNotifications.map((notification) => (
                    <div key={notification.id} className="flex items-start p-2 rounded-lg hover:bg-gray-50">
                      <div className="mr-3 flex-shrink-0">
                      
                          <div className="relative flex">
                            {notification.profilePics.slice(0, 3).map((pic, index) => (
                              <img 
                                key={index}
                                src={pic} 
                                alt="Profile" 
                                className={`w-12 h-12 rounded-full  ${index > 0 ? '-ml-4' : ''}`}
                                style={{ zIndex: 3 - index }}
                              />
                            ))}
                          </div>
                       
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <p className="text-[#181818] font-meduim text-[14px]">{notification.content}</p>
                        <p className="text-[#181818] text-sm font-[10px]">{notification.time}</p>
                      </div>
                      
                      <button className="flex-shrink-0 p-1 rounded-full hover:bg-gray-200">
                      <BsThreeDots  size={30}  />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {activeTab === "settings" && (
              <div className="p-6">
                <div className="text-center py-8 text-gray-500">
                  <p>Notification settings content will go here</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
            </div>
        </div>
    </>
  )
}

export default Notifications