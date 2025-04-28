import React, { useState, useRef } from 'react';
import { Image, Video, Calendar, FileText,  Mic, Image as ImageIcon, PencilLine, Send  } from 'lucide-react';
import CreatePostModal from './CreatePostModal';
import useFeedStore from '../../store/feedStore';

function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('text');
  const { posts, addPost } = useFeedStore();
  const [comments, setComments] = useState({});
  const fileInputRef = useRef(null);
  const mediaTargetPostId = useRef(null);

  const handleCreatePost = (post) => {
    addPost(post);
  };

  const handleOpenModal = (type) => {
    setSelectedType(type);
    setIsModalOpen(true);
  };

  const handleCommentSubmit = (postId) => {
    console.log(`Comment for post ${postId}:`, comments[postId]);
    setComments((prev) => ({ ...prev, [postId]: '' }));
  };

  const handleCommentChange = (postId, value) => {
    setComments((prev) => ({ ...prev, [postId]: value }));

  };



  const handleImageUpload = (file) => {
    if (file && mediaTargetPostId.current) {
      console.log(`Image uploaded for post ${mediaTargetPostId.current}:`, file.name);
    }
  };

  const triggerImageUpload = (postId) => {
    mediaTargetPostId.current = postId;
    if (fileInputRef.current) {
      fileInputRef.current.accept = 'image/*';
      fileInputRef.current.click();
    }
  };

  const handleVoiceNote = (postId) => {
    console.log(`Voice note initiated for post ${postId}`);
  };


  return (
    <div className=" mx-auto    ">
      <div className=" bg-white rounded-lg pt-4 shadow">
        <div className="flex gap-3 p-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <button
            className="flex-1 text-gray-500 h-10 py-2  rounded-md text-left "
            onClick={() => handleOpenModal('text')}
          ><div className='flex'>
              <span className='text-nornal text-[16px]'> Write something...</span>
              <PencilLine className=" text-gray-400" size={20} />
          </div>
           
          </button>
        </div>
        <div className="flex justify-between  text-white   bg-[#15411FB0] rounded-b-lg mt-4">
          {[['photo', Image], ['video', Video], ['event', Calendar], ['article', FileText]].map(
            ([type, Icon]) => (
              <button
                key={type}
                className="flex items-center  p-5   rounded-lg"
                onClick={() => handleOpenModal(type)}
              >
                <Icon className="w-5 h-5" />
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            )
          )}
          <div className='flex bg-flag-green p-5 rounded-br-lg items-center gap-2'>
          <Send />
          </div>
        </div>
      </div>

      <div className=" mt-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md mb-4 p-4">
            <div className="flex items-center gap-3 mb-2">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full"
              />
              <div>
                <h3 className="font-semibold">{post.author.name}</h3>
                <p className="text-sm text-gray-500">{post.author.role}</p>
                <p className="text-xs text-gray-400">
                  {new Date(post.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
            <p className="text-gray-800 mb-4 whitespace-pre-wrap">{post.content}</p>
            {post.media && (
              <div className="mb-4">
                {post.type === 'photo' && (
                  <img src={post.media} alt="Post" className="rounded-lg max-h-96 w-full object-cover" />
                )}
                {post.type === 'video' && (
                  <video src={post.media} controls className="rounded-lg max-h-96 w-full" />
                )}
                {post.type === 'article' && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <FileText className="w-6 h-6 mb-2" />
                    <p className="text-sm text-gray-600">Article: {post.fileName}</p>
                  </div>
                )}
              </div>
            )}
            <div className="flex gap-4">
              <button className="text-gray-500 hover:text-gray-700">Like</button>
              <button className="text-gray-500 hover:text-gray-700">Comment</button>
              <button className="text-gray-500 hover:text-gray-700">Share</button>
            </div>
            <div className="flex items-center gap-2">
              <input
               
                type="text"
                placeholder="Write a comment..."
                value={comments[post.id] || ''}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
                className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <button onClick={() => handleVoiceNote(post.id)}>
                <Mic className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </button>
              <button onClick={() => triggerImageUpload(post.id)}>
                <ImageIcon className="w-5 h-5 text-flag-green hover:text-gray-700" />
              </button>
              <button
              className="mt-2 text-blue-500 hover:text-blue-700"
              onClick={() => handleCommentSubmit(post.id)}
            >
              Submit
            </button>
            </div>
          
          </div>
        ))}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        onChange={(e) => handleImageUpload(e.target.files[0])}
      />

      <CreatePostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreatePost}
        type={selectedType}
      />
    </div>
  );
}

export default Feed;
