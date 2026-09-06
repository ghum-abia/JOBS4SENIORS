import React, { useState, useRef } from 'react';
import { Image, Video, Calendar, FileText, Mic, Image as ImageIcon, PencilLine, Send, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';
import CreatePostModal from './CreatePostModal';
import useFeedStore from '../../store/feedStore';

function Feed() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState('text');
  const { posts, addPost, likePost, addComment } = useFeedStore();
  const [commentInputs, setCommentInputs] = useState({});
  const [expandedComments, setExpandedComments] = useState({});
  const fileInputRef = useRef(null);
  const mediaTargetPostId = useRef(null);

  const handleCreatePost = (post) => {
    addPost(post);
  };

  const handleOpenModal = (type) => {
    setSelectedType(type);
    setIsModalOpen(true);
  };

  const handleCommentChange = (postId, value) => {
    setCommentInputs((prev) => ({ ...prev, [postId]: value }));
  };

  const handleCommentSubmit = (postId) => {
    const text = commentInputs[postId]?.trim();
    if (!text) return;
    addComment(postId, {
      id: Date.now(),
      author: 'You',
      message: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    });
    setCommentInputs((prev) => ({ ...prev, [postId]: '' }));
    setExpandedComments((prev) => ({ ...prev, [postId]: true }));
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

  const toggleComments = (postId) => {
    setExpandedComments((prev) => ({ ...prev, [postId]: !prev[postId] }));
  };

  return (
    <div className="mx-auto">
      {/* Post Input Card */}
      <div className="bg-white rounded-lg pt-4 shadow">
        <div className="flex gap-3 p-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="User avatar"
            className="w-10 h-10 rounded-full"
          />
          <button
            className="flex-1 text-gray-500 h-10 py-2 rounded-md text-left"
            onClick={() => handleOpenModal('text')}
          >
            <div className="flex">
              <span className="text-normal text-[16px]">Write something...</span>
              <PencilLine className="text-gray-400 ml-2" size={20} />
            </div>
          </button>
        </div>
        <div className="flex justify-between text-white bg-[#15411FB0] rounded-b-lg mt-4">
          {[['photo', Image], ['video', Video], ['event', Calendar], ['article', FileText]].map(
            ([type, Icon]) => (
              <button
                key={type}
                className="flex items-center gap-1 p-5 rounded-lg"
                onClick={() => handleOpenModal(type)}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{type.charAt(0).toUpperCase() + type.slice(1)}</span>
              </button>
            )
          )}
          <div className="flex bg-[#15411FD9] p-5 rounded-br-lg items-center gap-2">
            <Send />
          </div>
        </div>
      </div>

      {/* Posts Feed */}
      <div className="mt-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg shadow-md mb-4 p-4">
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-[14px]">{post.author.name}</h3>
                <p className="text-sm text-gray-500 text-[12px]">{post.author.role}</p>
                <p className="text-xs text-gray-400">
                  {new Date(post.timestamp).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Post Content */}
            <p className="text-gray-800 mb-3 whitespace-pre-wrap text-[14px]">{post.content}</p>

            {/* Post Media */}
            {post.media && (
              <div className="mb-3">
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

            {/* Likes / Comments count */}
            {((post.likes > 0) || (post.comments?.length > 0)) && (
              <div className="flex gap-4 text-xs text-gray-500 mb-2 border-b pb-2">
                {post.likes > 0 && <span>👍 {post.likes} likes</span>}
                {post.comments?.length > 0 && (
                  <button onClick={() => toggleComments(post.id)} className="hover:underline">
                    {post.comments.length} comment{post.comments.length !== 1 ? 's' : ''}
                  </button>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex gap-4 border-b pb-3 mb-3">
              <button
                className="flex items-center gap-1 text-gray-500 hover:text-[#15411F] text-sm transition-colors"
                onClick={() => likePost(post.id)}
              >
                <ThumbsUp size={16} />
                <span>Like</span>
              </button>
              <button
                className="flex items-center gap-1 text-gray-500 hover:text-[#15411F] text-sm transition-colors"
                onClick={() => toggleComments(post.id)}
              >
                <MessageCircle size={16} />
                <span>Comment</span>
              </button>
              <button className="flex items-center gap-1 text-gray-500 hover:text-[#15411F] text-sm transition-colors">
                <Share2 size={16} />
                <span>Share</span>
              </button>
            </div>

            {/* Comments Section */}
            {expandedComments[post.id] && post.comments?.length > 0 && (
              <div className="space-y-2 mb-3">
                {post.comments.map((c) => (
                  <div key={c.id} className="flex gap-2">
                    <div className="w-7 h-7 rounded-full bg-[#15411F] flex items-center justify-center text-white text-xs flex-shrink-0">
                      {c.author?.[0] || 'U'}
                    </div>
                    <div className="bg-gray-50 rounded-lg px-3 py-2 flex-1">
                      <p className="text-xs font-semibold text-gray-700">{c.author}</p>
                      <p className="text-xs text-gray-600">{c.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Comment Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Write a comment..."
                value={commentInputs[post.id] || ''}
                onChange={(e) => handleCommentChange(post.id, e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleCommentSubmit(post.id)}
                className="flex-1 h-9 rounded-full border border-gray-200 bg-gray-50 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#15411F]"
              />
              <button onClick={() => triggerImageUpload(post.id)}>
                <ImageIcon className="w-5 h-5 text-[#15411F] hover:text-gray-700" />
              </button>
              <button
                onClick={() => handleCommentSubmit(post.id)}
                className="bg-[#15411F] text-white rounded-full p-2 hover:bg-green-900 transition-colors"
              >
                <Send size={14} />
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
