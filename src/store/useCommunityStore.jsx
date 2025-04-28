import { create } from 'zustand';

// export const useCommunityStore = create((set) => ({
//   communities: [
//     {
//       id: 1,
//       name: "UI Design",
//       icon: "🎨",
//       slug: "ui-design"
//     },
//     {
//       id: 2,
//       name: "Web Development",
//       icon: "💻",
//       slug: "web-dev"
//     },
//     {
//       id: 3,
//       name: "Mobile Apps",
//       icon: "📱",
//       slug: "mobile-apps"
//     }
//   ],
//   selectedCommunity: null,
//   setSelectedCommunity: (community) => set({ selectedCommunity: community }),
//   addCommunity: (newCommunity) =>
//     set((state) => ({
//       communities: [...state.communities, newCommunity]
//     }))
// }));


export const useCommunityStore = create((set) => ({
  communities: [
    {
      id: 1,
      name: "UI Design",
      icon: "🎨",
      slug: "ui-design"
    },
    {
      id: 2,
      name: "Web Development",
      icon: "💻",
      slug: "web-dev"
    },
    {
      id: 3,
      name: "Mobile Apps",
      icon: "📱",
      slug: "mobile-apps"
    }
  ],
  selectedCommunity: null,
  communityPosts: {
    'ui-design': [
      {
        id: 1,
        title: "How I designed the best UI",
        author: {
          name: "John Doe",
          verified: true,
        },
        timestamp: "1 week ago",
        tags: ["UI", "Design"],
        stats: {
          views: "123",
          likes: "45",
          comments: "6"
        }
      }
    ],
    'web-dev': [
      {
        id: 2,
        title: "How I designed the best UI",
        author: {
          name: "John Doe",
          verified: true,
        },
        timestamp: "1 week ago",
        tags: ["UI", "Design"],
        stats: {
          views: "123",
          likes: "45",
          comments: "6"
        }
      }
    ]
  },
  addCommunity: (community) =>
    set((state) => ({
      communities: [...state.communities, community],
      communityPosts: {
        ...state.communityPosts,
        [community.slug]: []
      }
    })),
  addPostToCommunity: (slug, post) =>
    set((state) => ({
      communityPosts: {
        ...state.communityPosts,
        [slug]: [...(state.communityPosts[slug] || []), { ...post, id: Date.now() }]
      }
    })),
    addCommentToPost: (slug, postId, comment) =>
      set((state) => {
        const posts = [...(state.communityPosts[slug] || [])];
        const index = posts.findIndex(p => p.id === postId);
    
        if (index !== -1) {
          const post = posts[index];
          const updatedPost = {
            ...post,
            comments: [...(post.comments || []), comment]
          };
          posts[index] = updatedPost;
        }
    
        return {
          communityPosts: {
            ...state.communityPosts,
            [slug]: posts
          }
        };
      }),
}));


