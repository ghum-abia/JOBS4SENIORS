import React from 'react'
import { useState } from "react";


export default function Connects() {

    const [activeTab, setActiveTab] = useState("received");

    const newConnections = [
        {
          id: "1",
          name: "Brandon Wilson",
          title: "Senior UX designer",
          connections: 623,
          message: "Hey, I saw your works. I like it! Can we do something together? Or maybe you have project for UX at the moment?",
          profilePic: "https://randomuser.me/api/portraits/men/40.jpg"
        },
        {
          id: "2",
          name: "Theresa Steward",
          title: "iOS developer",
          connections: 481,
          profilePic: "https://randomuser.me/api/portraits/women/47.jpg"
        }
      ];
      
      const recentConnections = [
        {
          id: "3",
          name: "Audrey Alexander",
          title: "Team lead at Google",
          profilePic: "https://randomuser.me/api/portraits/women/22.jpg",
          date: "Yesterday, 14:30"
        },
        {
          id: "4",
          name: "Kyle Fisher",
          title: "Product designer at Commandor Corp",
          profilePic: "https://randomuser.me/api/portraits/men/41.jpg",
          date: "Yesterday, 12:03"
        },
        {
          id: "5",
          name: "Darlene Black",
          title: "HR-manager, 10 000 connections",
          profilePic: "https://randomuser.me/api/portraits/women/35.jpg",
          date: "26 aug, monday"
        },
        {
          id: "6",
          name: "Eduardo Russell",
          title: "Full stack developer at Yandex",
          profilePic: "https://randomuser.me/api/portraits/men/75.jpg",
          date: "23 aug, sunday"
        }
      ];


  return (
    <>
    <div className='bg-white rounded-2xl '>
        <div>
        <div className="flex-1 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Network</h1>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="flex w-[600px] border-b">
            <button
              className={`flex-1 py-4 font-medium text-center ${
                activeTab === "received" 
                  ? "bg-flag-green text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("received")}
            >
              RECEIVED
            </button>
            <button
              className={`flex-1 py-4 font-medium text-center ${
                activeTab === "sent" 
                  ? "bg-flag-green text-white" 
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
              onClick={() => setActiveTab("sent")}
            >
              SENT
            </button>
          </div>
          
          <div className="p-4">
            {activeTab === "received" && (
              <div className="space-y-6">
                <h2 className="text-sm font-bold flex justify-center text-[#15411F] pb-4 uppercase">YOU HAVE {newConnections.length} NEW CONNECTIONS</h2>
                
                {newConnections.map((connection) => (
                  <div key={connection.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                    <div className="flex items-start">
                      <img 
                        src={connection.profilePic} 
                        alt={connection.name} 
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <div>
                            <h3 className="font-semibold ">{connection.name}</h3>
                            <p className="text-normal text-[10px] text-gray-600">{connection.title}</p>
                            <p className="text-xs text-[#15411F]">{connection.connections} connections</p>
                          </div>
                            {connection.message && (
                            <div className="mt-3 ml-4 pl-4 w-[300px] border-l-2 border-[#15411F]">
                                <p className="text-gray-600 text-sm text-[10px]">{connection.message}</p>
                            </div>
                            )}
                          <div className="flex gap-1">
                            <button className="px-6 py-2 bg-[#15411F] h-10 text-white rounded hover:bg-green-900 transition-colors">
                              ACCEPT
                            </button>
                            <button className="px-6 py-2 bg-white border  h-10 border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors">
                              DECLINE
                            </button>
                          </div>
                        </div>
                        
                       
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === "sent" && (
             <div className="space-y-6">
             <h2 className="text-sm font-bold flex justify-center text-[#15411F] pb-4 uppercase">YOU HAVE {newConnections.length} NEW CONNECTIONS</h2>
             
             {newConnections.map((connection) => (
               <div key={connection.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                 <div className="flex items-start">
                   <img 
                     src={connection.profilePic} 
                     alt={connection.name} 
                     className="w-16 h-16 rounded-full mr-4"
                   />
                   <div className="flex-1">
                     <div className="flex justify-between">
                       <div>
                         <h3 className="font-semibold ">{connection.name}</h3>
                         <p className="text-normal text-[10px] text-gray-600">{connection.title}</p>
                         <p className="text-xs text-[#15411F]">{connection.connections} connections</p>
                       </div>
                         {connection.message && (
                         <div className="mt-3 ml-4 pl-4 w-[300px] border-l-2 border-[#15411F]">
                             <p className="text-gray-600 text-sm text-[10px]">{connection.message}</p>
                         </div>
                         )}
                       <div className="flex gap-1">
                         <button className="px-6 py-2 bg-[#15411F] h-10 text-white rounded hover:bg-green-900 transition-colors">
                           ACCEPT
                         </button>
                         <button className="px-6 py-2 bg-white border  h-10 border-gray-300 text-gray-600 rounded hover:bg-gray-50 transition-colors">
                           DECLINE
                         </button>
                       </div>
                     </div>
                     
                    
                   </div>
                 </div>
               </div>
             ))}
           </div>
            )}
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6">
            <h2 className="text-sm font-bold text-[#181818] uppercase  flex justify-center mb-6">RECENT CONNECTIONS</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentConnections.map((connection) => (
                <div key={connection.id} className="flex items-start">
                  <img 
                    src={connection.profilePic} 
                    alt={connection.name} 
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{connection.name}</h3>
                    <p className="text-sm text-gray-600">{connection.title}</p>
                    <p className="text-xs text-gray-500 mt-1">{connection.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    </div>
    </>
  )
}
