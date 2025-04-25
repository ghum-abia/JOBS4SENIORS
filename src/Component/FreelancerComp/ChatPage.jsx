import { useState, useRef } from "react";
import { FiPaperclip } from "react-icons/fi";
import { BsSend } from "react-icons/bs";


const ChatPage = () => {
  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);


  const chatList = [
    {
      id: 1,
      name: "Darlene Black",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      lastMessage: "Hi, how is your project?",
      online: true,
    },
    {
      id: 2,
      name: "Theresa Steward",
      avatar: "https://randomuser.me/api/portraits/women/47.jpg",
      lastMessage: "Hi, Dmitry! I have a work for you.",
      online: true,
    },
    {
      id: 3,
      name: "Brandon Wilson",
      avatar: "https://randomuser.me/api/portraits/men/33.jpg",
      lastMessage: "I am Russian and I am learning Eng",
      online: false,
    },
    {
      id: 4,
      name: "Kyle Fisher",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
      lastMessage: "So, it's up to you!",
      online: false,
    },
    {
      id: 5,
      name: "Audrey Alexander",
      avatar: "https://randomuser.me/api/portraits/women/74.jpg",
      lastMessage: "Hey, you got it?",
      online: true,
    },
    {
      id: 6,
      name: "Design Conference",
      avatar: "https://randomuser.me/api/portraits/men/64.jpg",
      isGroup: true,
      lastMessage: "Can you guys help me with it?",
      online: false,
    },
  ];


  const [activeChat, setActiveChat] = useState(chatList[3]); // Default to Kyle Fisher's chat
  // Set the default active chat to Kyle Fisher's chat

  const [conversations, setConversations] = useState({
    4: [ // Kyle Fisher
      {
        id: 1,
        sender: "me",
        message: "Hi, Kyle. How are you doing? Did you get that job yesterday?",
        time: "4:20 PM",
        read: true,
      },
      {
        id: 2,
        sender: "other",
        message: "Nope, they kicked me out of the office!",
        time: "4:25 PM",
      },
      {
        id: 3,
        sender: "me",
        message: "Wow! I can invite you in my new project. We need a product designer right now!",
        time: "4:30 PM",
        read: true,
      },
      {
        id: 4,
        sender: "other",
        message: "It'll be great! I need this job, but...",
        time: "4:28 PM",
      },
      {
        id: 5,
        sender: "other",
        message: "So, it's up to you!",
        time: "4:29 PM",
      },
    ],
    1: [ // Kyle Fisher
      {
        id: 1,
        sender: "me",
        message: "Hi, Kyle. How are you doing? Did you get that job yesterday?",
        time: "4:20 PM",
        read: true,
      },
      {
        id: 2,
        sender: "other",
        message: "Nope, they kicked me out of the office!",
        time: "4:25 PM",
      },
      {
        id: 3,
        sender: "me",
        message: "Wow! I can invite you in my new project. We need a product designer right now!",
        time: "4:30 PM",
        read: true,
      },
      {
        id: 4,
        sender: "other",
        message: "It'll be great! I need this job, but...",
        time: "4:28 PM",
      },
      {
        id: 5,
        sender: "other",
        message: "So, it's up to you!",
        time: "4:29 PM",
      },
    ],
    // You can add more fake conversation arrays for other users if needed
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newMessage = {
        id: (conversations[activeChat.id]?.length || 0) + 1,
        sender: "me",
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        read: true,
      };

      setConversations((prevConvos) => ({
        ...prevConvos,
        [activeChat.id]: [...(prevConvos[activeChat.id] || []), newMessage],
      }));

      setMessage(""); // Clear input

    }
  };



  const handleFileSend = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const isImage = file.type.startsWith("image/");
    const reader = new FileReader();

    reader.onloadend = () => {
      const newMessage = {
        id: (conversations[activeChat.id]?.length || 0) + 1,
        sender: "me",
        message: reader.result, // base64 string
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        read: true,
        file: {
          name: file.name,
          type: file.type,
          isImage,
        },
      };

      setConversations((prevConvos) => ({
        ...prevConvos,
        [activeChat.id]: [...(prevConvos[activeChat.id] || []), newMessage],
      }));
    };

    reader.readAsDataURL(file); // Convert to base64
  };

  return (
    <div className="flex  h-full lg:px-20 gap-4">
      {/* Left sidebar with chat list */}
      <div className=" hidden lg:block bg-white  rounded-2xl  w-[25%]  grid px-1">
        <div className="p-4 h-[10%]">
          <h2 className="font- text-normal  uppercase text-[12px] text-[#181818]">CHATS</h2>

        </div>
        <div className="overflow-y-scroll  w-full truncate h-[75%]">
          {chatList.map((chat) => (
            <div

              key={chat.id}
              className={`flex gap-2 items-center p-4 hover:bg-gray-50 cursor-pointer ${activeChat?.id === chat.id ? 'border-l-4 border-green-700 bg-gray-50' : ''}`}
              onClick={() => setActiveChat(chat)}
            >

              <div className="relative">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                {chat.online && (
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                )}
              </div>
              <div className=" flex-1">
                <h3 className="font-normal text-gray-800">{chat.name}</h3>
                <p className="text-gray-500 text-sm truncate">{chat.lastMessage}</p>
              </div>
            </div>
          ))}

         
        </div>
        <div className="p-4 bottom-5 h-[10%]">
          <button className="w-full bg-[#15411F] text-white font-normal text-[12px] py-3 rounded hover:bg-green-900 transition-colors">
            START NEW CHAT
          </button>
        </div>

      </div>


      {/* Main chat area */}
      <div className="  flex-1 flex flex-col bg-gray-50  rounded-2xl w-[75%]">
        <h2 className="text-[21px] text-[#3A3A3A] p-4 font-semibold">Chats</h2>
        {/* Chat header */}
        <div className="bg-white px-4">

          <div className="flex justify-between items-center">

            <button className=" hover:bg-gray-200  px-3 py-1 rounded-l-md">
              CHAT WITH <span className="text-flag-green"> {activeChat.name.toUpperCase()} </span>
            </button>
            <button className=" hover:bg-gray-200 text-gray-500 px-3 py-1 rounded-r-md">
              LAST ONLINE: 4 HOURS AGO
            </button>

            <div className="ml-4">
              <button className="flex items-center text-gray-600 hover:text-gray-800">
                <FiPaperclip size={18} className="mr-1 text-flag-green" />
                <span className="text-sm font-medium">SHARED MEDIA (12)</span>
              </button>
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4">



          {(conversations[activeChat.id] || []).map((convo) => (
            <div
              key={convo.id}
              className={`flex mb-4 ${convo.sender === 'me' ? 'justify-start' : 'justify-end'}`}
            >

              {convo.sender === 'me' && (
                <>
                  <div className="mr-2">
                    <div className="bg-flag-green text-white p-3 rounded-lg max-w-md">
                      {convo.file ? (
                        convo.file.isImage ? (
                          <img src={convo.message} alt={convo.file.name} className="rounded-md max-w-xs" />
                        ) : (
                          <a href={convo.message} download={convo.file.name} className="text-blue-600 underline">
                            {convo.file.name}
                          </a>
                        )
                      ) : (
                        convo.message
                      )}
                    </div>
                    <div className="text-normal text-[14px] text-[#FFFFFF] mt-1 flex items-center">
                      {convo.read && <span className="text-blue-600 mr-1">✓✓</span>}
                      {convo.time}
                    </div>
                  </div>
                </>
              )}

              {convo.sender === 'other' && (
                <>
                  <div className="ml-2">
                    <div className="bg-[#E8FFED] text-gray-800 p-3 rounded-lg max-w-md">
                      {convo.file ? (
                        convo.file.isImage ? (
                          <img src={convo.message} alt={convo.file.name} className="rounded-md max-w-xs" />
                        ) : (
                          <a href={convo.message} download={convo.file.name} className="text-blue-600 underline">
                            {convo.file.name}
                          </a>
                        )
                      ) : (
                        convo.message
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 text-right">
                      {convo.time}
                    </div>
                  </div>
                  <img
                    src={activeChat.avatar}
                    alt={activeChat.name}
                    className="w-8 h-8 rounded-full object-cover ml-2"
                  />
                </>
              )}
            </div>
          ))}
        </div>
        {(conversations[activeChat.id] || []).length === 0 && (
          <div className="text-center text-gray-400 mt-10">No messages yet. Say hello!</div>
        )}

        {/* Message input */}
        <div className="bg-white p-4 rounded-2xl">
          <form onSubmit={handleSendMessage} className="flex items-center gap-1">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your message"
              className="flex-1 border-none rounded-md outline-none py-2 px-4 focus:ring-2 focus:ring-flag-green focus:outline-none"
            />
            <button
              type="button"
              className="bg-white border-1 p-2 text-gray-500 hover:text-gray-700"
              onClick={() => fileInputRef.current.click()}
            >
              <FiPaperclip size={20} />
            </button>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              onChange={(e) => handleFileSend(e)}
            />

            <button
              type="submit"
              className="bg-flag-green text-white p-2.5 rounded-md hover:bg-green-900"
            >
              <BsSend size={20} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
