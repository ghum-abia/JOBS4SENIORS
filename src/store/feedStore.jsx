import { create } from 'zustand';

const useFeedStore = create((set) => ({
  posts: [],
  addPost: (post) => set((state) => ({ 
    posts: [post, ...state.posts] 
  })),
}));

export default useFeedStore;