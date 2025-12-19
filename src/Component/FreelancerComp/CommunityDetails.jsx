import React from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import { useCommunityStore } from '../../store/useCommunityStore';

export default function CommunityDetail() {
  const { slug, postId } = useParams();
  const { communityPosts, addCommentToPost } = useCommunityStore();
//   const { communityPosts } = useCommunityStore();
  const posts = communityPosts?.[slug] || [];
  const post = posts.find(p => p.id.toString() === postId);

  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post?.comments || []);

  if (!post) return <div className="p-4 text-center">Post not found</div>;

  const handleSendComment = () => {
    if (!comment.trim()) return;

    const newComment = {
      id: Date.now(),
      author: 'You',
      message: comment,
      timestamp: new Date().toLocaleString(),
    };

    setComments([...comments, newComment]);
    setComment('');
    addCommentToPost(slug, post.id, newComment); // persist to store (optional)
  };

  return (
    <div className="max-w-3xl mx-auto h-full p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
      <div className="flex items-center gap-2 text-gray-600 mb-4">
        <span>{post.author.name}</span>
        <span>{post.timestamp}</span>
      </div>
      <div className="flex gap-2 mb-4">
        {post.tags.map((tag) => (
          <span key={tag} className="bg-gray-200 px-2 py-1 text-sm rounded">{tag}</span>
        ))}
      </div>

      <div className="mt-6 text-sm text-gray-500">
        {post.stats.views} views • {post.stats.likes} likes • {post.stats.comments} comments
      </div>
      <div className="mt-8">
        <div className="space-y-3 mb-4">
          {comments.map((c) => (
            <div key={c.id} className="bg-gray-100 p-3 rounded">
              <div className="flex items-center justify-between text-sm text-gray-700">
                <span className="font-medium">{c.author}</span>
                <span className="text-xs text-gray-500">{c.timestamp}</span>
              </div>
              <p className="mt-1 text-gray-800">{c.message}</p>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write a comment..."
            className="flex-grow border border-gray-300 rounded p-2"
          />
          <button
            onClick={handleSendComment}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
