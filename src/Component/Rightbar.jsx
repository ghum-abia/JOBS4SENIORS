import React from 'react'
import { useState } from 'react'
import DashboardRightbar from './DashboardRightbar';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import profileimg from '../assets/dashboard/profileimg.png';

function Rightbar() {

  const [chatOpen, setChatOpen] = useState(false);
  const isOnline = true;
  // Chat list
  const chatList = [
    { name: "John Doe", message: "Hey! How are you?" },
    { name: "Sarah Smith", message: "Let's meet tomorrow." },
    { name: "Michael Lee", message: "Can you send the file?" },
    { name: "Michael Lee", message: "Can you send the file?", },
    { name: "Michael Lee", message: "Can you send the file?" },
    { name: "Michael Lee", message: "Can you send the file?", },
    { name: "Michael Lee", message: "Can you send the file?", },
  ];





  const [messages, setMessages] = useState(6); // Message count

  return (
    <div className='relative'>
      {/* If chat is not open, show dashboard rightbar */}
      <div className='relative'>
        <DashboardRightbar />
      </div>


      {/* If chat is open, show chat list */}
      {/* Chat List (Shows on top when chat is open) */}
      { /* chatOpen && (
        <div className="absolute fixed py-4 shadow-lg  w-1/5 hidden lg:block bg-white  shadow-md rounded-2xl h-screen">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-normal pl-4">Chat</h2>
           
          </div>
          <div className=' overflow-y-auto  scrollbar-none'>
          <hr  className=' text-[#F4F4F4]'  />
            {chatList.map((chat, index) => (
                <div key={index} className="py-2 px-2 rounded-md ">
                  
                  

                   <div className='flex pb-2  pl-1'>
                        <div className='relative'>
                         <img className='rounded-full w-[44px]' src={profileimg} alt="" />
                          {/* Green Dot (Online Status) */}
      { /* isOnline && (
                            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-gray-700 rounded-full"></span>
                            )}
                        
                        </div>
                        <div className='pl-3'>
                            <p className="font-boldtext-[#181818] ">{chat.name}</p>
                            <p className="text-sm text-[#18181880]">{chat.message}</p>
                        </div>
                    </div>
                 
                    <hr  className=' text-[#F4F4F4]'    />
                   
                </div>
                
            ))}
          </div>
        </div>
      )}

          {/* Floating Chat Button (Always at Bottom) */}

      <div onClick={() => setChatOpen(!chatOpen)} className=' bg-white fixed bottom-0 shadow-md rounded-t-2xl w-1/5 hidden lg:block'>
        <div className='flex items-center p-2 cursor-pointer pb-2 justify-between'>
          <div className='flex '>
            <AiOutlineMessage />
            <span className='font-normal text-[12px] text-[#181818] pl-3'>Messages</span>
          </div>


          <div className='flex items-center'>
            <span className="text-[#FFFFFF] bg-red-500 text-[10px] content-center px-1  mr-4 rounded-[100%]">{messages}</span>
            <button
              className="  p-2 rounded-full shadow-lg">{!chatOpen ? <FaAngleUp size={14} /> : <FaAngleDown size={14} />}</button>
          </div>
        </div>


      </div>


    </div>
  )
}

export default Rightbar