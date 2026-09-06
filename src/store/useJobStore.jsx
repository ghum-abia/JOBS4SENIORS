import { create } from 'zustand';

const useJobStore = create((set) => ({
  bookmarkedJobs: [],

  bookmarkJob: (job) =>
    set((state) => {
      const alreadyBookmarked = state.bookmarkedJobs.some(
        (saved) => saved.id === job.id
      );
      if (alreadyBookmarked) return state; // don't duplicate
      return { bookmarkedJobs: [...state.bookmarkedJobs, job] };
    }),

  removeBookmark: (jobId) =>
    set((state) => ({
      bookmarkedJobs: state.bookmarkedJobs.filter((job) => job.id !== jobId),
    })),

  isBookmarked: (jobId) => (state) =>
    state.bookmarkedJobs.some((job) => job.id === jobId),
}));

export default useJobStore;

