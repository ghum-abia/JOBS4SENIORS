/**
 * feedService.js
 * ---------------
 * API calls for the social feed: posts, likes, comments.
 */

import api from './axiosInstance';

/**
 * Get the feed (paginated posts from connections)
 * GET /feed?page=1&limit=10
 */
export const getFeed = async (page = 1, limit = 10) => {
  const { data } = await api.get('/feed', { params: { page, limit } });
  return data; // expected: { posts: [], total: number, page: number }
};

/**
 * Create a new post (supports text, photo, video, article)
 * POST /feed/posts
 * @param {FormData | object} payload
 */
export const createPost = async (payload) => {
  const isFormData = payload instanceof FormData;
  const { data } = await api.post('/feed/posts', payload, {
    headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
  });
  return data;
};

/**
 * Like or unlike a post (toggle)
 * POST /feed/posts/:id/like
 */
export const toggleLike = async (postId) => {
  const { data } = await api.post(`/feed/posts/${postId}/like`);
  return data;
};

/**
 * Add a comment to a post
 * POST /feed/posts/:id/comments
 * @param {string} postId
 * @param {{ message: string }} payload
 */
export const addComment = async (postId, payload) => {
  const { data } = await api.post(`/feed/posts/${postId}/comments`, payload);
  return data;
};

/**
 * Delete a post
 * DELETE /feed/posts/:id
 */
export const deletePost = async (postId) => {
  const { data } = await api.delete(`/feed/posts/${postId}`);
  return data;
};
