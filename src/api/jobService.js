/**
 * jobService.js
 * --------------
 * API calls for job listings, job details, and bookmarks.
 */

import api from './axiosInstance';

/**
 * Fetch all jobs (with optional filter query params)
 * GET /jobs?experience=Expert&location=Lagos&page=1
 * @param {object} params - filter/pagination params
 */
export const getJobs = async (params = {}) => {
  const { data } = await api.get('/jobs', { params });
  return data; // expected: { jobs: [], total: number, page: number }
};

/**
 * Fetch a single job by ID
 * GET /jobs/:id
 */
export const getJobById = async (id) => {
  const { data } = await api.get(`/jobs/${id}`);
  return data;
};

/**
 * Search jobs by keyword
 * GET /jobs/search?q=react+developer
 */
export const searchJobs = async (query) => {
  const { data } = await api.get('/jobs/search', { params: { q: query } });
  return data;
};

/**
 * Bookmark a job
 * POST /jobs/:id/bookmark
 */
export const bookmarkJob = async (jobId) => {
  const { data } = await api.post(`/jobs/${jobId}/bookmark`);
  return data;
};

/**
 * Remove a bookmark
 * DELETE /jobs/:id/bookmark
 */
export const removeBookmark = async (jobId) => {
  const { data } = await api.delete(`/jobs/${jobId}/bookmark`);
  return data;
};

/**
 * Get all bookmarked jobs for the current user
 * GET /jobs/bookmarks
 */
export const getBookmarkedJobs = async () => {
  const { data } = await api.get('/jobs/bookmarks');
  return data;
};
