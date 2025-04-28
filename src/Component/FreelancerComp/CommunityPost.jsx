import React from 'react';
import { useParams } from 'react-router';
import { useUIPostStore } from '../../store/useUIPostStore' ;
import UIPostCard from './UIPostCard';

function CommunityPost() {
  
  const { slug } = useParams();
  const { postsByCommunity } = useUIPostStore();

  const posts = postsByCommunity[slug] || [];

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-4">New</h1>
      <div className="p-4 space-y-4">
      {posts.length === 0 ? (
        <p className="text-gray-500">No posts in this community yet.</p>
      ) : (
        posts.map((post) => <UIPostCard key={post.id} post={post} />)
      )}
    </div>
    </div>
  );
}

export default CommunityPost;