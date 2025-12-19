// useUIPostStore.js
import { create } from 'zustand';

export const useUIPostStore = create((set) => ({
  postsByCommunity: {
    'ui-design': [
      {
        id: 1,
        title: "UI Design Principles You Need to Know",
        author: {
          name: "Michal Chike",
          avatar: "/lovable-uploads/c1849589-1a56-4c27-951a-0be5e90444c7.png",
          verified: true
        },
        timestamp: "2 weeks ago",
        stats: {
          views: "964,258",
          likes: "64,755",
          comments: "44"
        },
        tags: ["UI", "design", "principles"]
      },
    ],
    'web-dev': [
      {
        id: 2,
        title: "Mastering JavaScript in 30 Days",
        author: {
          name: "Ada Lovelace",
          avatar: "/lovable-uploads/js-master.png",
          verified: false
        },
        timestamp: "5 days ago",
        stats: {
          views: "120,000",
          likes: "8,500",
          comments: "98"
        },
        tags: ["javascript", "web", "development"]
      },
    ],
  },

  addPostToCommunity: (slug, post) =>
    set((state) => {
      const posts = state.postsByCommunity[slug] || [];
      return {
        postsByCommunity: {
          ...state.postsByCommunity,
          [slug]: [...posts, { ...post, id: Math.random() }]
        }
      };
    }),
}));
