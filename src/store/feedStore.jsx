import { create } from 'zustand';

const SEED_POSTS = [
  {
    id: 1,
    type: 'text',
    author: {
      name: 'Udo Emmanuel',
      role: 'Freelance UX/UI Designer',
      avatar:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content:
      'Just wrapped up an exciting mobile banking redesign project. Clean interfaces lead to happier users! 🎨 #UXDesign #MobileBanking',
    media: null,
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(), // 2 hrs ago
    likes: 42,
    comments: [],
  },
  {
    id: 2,
    type: 'photo',
    author: {
      name: 'Audrey Alexander',
      role: 'Team Lead at Google',
      avatar:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content:
      'Excited to be presenting at the Design Systems Summit next week. Here is a sneak peek of our design tokens workflow! 🚀',
    media:
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=60',
    timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    likes: 118,
    comments: [],
  },
  {
    id: 3,
    type: 'text',
    author: {
      name: 'Kyle Fisher',
      role: 'Product Designer at Commandor Corp',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    content:
      'Pro tip: Always validate your designs with real users before finalising. Saves so much rework! What is your favourite usability testing method? 💬',
    media: null,
    timestamp: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
    likes: 77,
    comments: [],
  },
];

const useFeedStore = create((set) => ({
  posts: SEED_POSTS,

  addPost: (post) =>
    set((state) => ({
      posts: [{ ...post, id: Date.now(), likes: 0, comments: [] }, ...state.posts],
    })),

  likePost: (postId) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === postId ? { ...p, likes: (p.likes || 0) + 1 } : p
      ),
    })),

  addComment: (postId, comment) =>
    set((state) => ({
      posts: state.posts.map((p) =>
        p.id === postId
          ? { ...p, comments: [...(p.comments || []), comment] }
          : p
      ),
    })),
}));

export default useFeedStore;