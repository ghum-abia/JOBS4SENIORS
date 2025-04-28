import React from 'react';
import { Link, useParams } from 'react-router';

const UIPostCard = ({ post }) => {
  const { slug } = useParams(); // Get the slug from the URL parameters

  return (

    <Link to={`/community/${slug}/post/${post.id}`} className="no-underline block">
    <div className="w-full max-w-2xl mx-auto bg-white rounded-lg border shadow-sm hover:shadow-lg transition-shadow">
      <div className="flex flex-row items-start justify-between p-6">
        <div className="flex gap-4">
          <div className="relative h-12 w-12 rounded-full overflow-hidden">
            <img 
              src={post.author.avatar} 
              alt={post.author.name}
              className="h-full w-full object-cover"
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${post.author.name}&background=random`;
              }}
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-gray-600">by {post.author.name}</span>
              {post.author.verified && (
                <span className="text-blue-500">✓</span>
              )}
              <span className="text-sm text-gray-500">{post.timestamp}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6 pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span 
              key={tag} 
              className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-800"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{post.stats.views}</span>
            <span className="text-sm">Views</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{post.stats.likes}</span>
            <span className="text-sm">Likes</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{post.stats.comments}</span>
            <span className="text-sm">comments</span>
          </div>
        </div>
      </div>
    </div>
  </Link>
  );
};

export default UIPostCard;