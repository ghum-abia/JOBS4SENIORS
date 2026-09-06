/**
 * profileService.js
 * ------------------
 * API calls for fetching and updating the user's profile.
 */

import api from './axiosInstance';

/**
 * Get the current user's full profile
 * GET /profile
 */
export const getProfile = async () => {
  const { data } = await api.get('/profile');
  return data;
};

/**
 * Update profile fields (text only)
 * PATCH /profile
 * @param {object} updates - { name, title, bio, location, ... }
 */
export const updateProfile = async (updates) => {
  const { data } = await api.patch('/profile', updates);
  return data;
};

/**
 * Upload a profile avatar
 * POST /profile/avatar
 * @param {File} file
 */
export const uploadAvatar = async (file) => {
  const formData = new FormData();
  formData.append('avatar', file);
  const { data } = await api.post('/profile/avatar', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

/**
 * Upload a cover image
 * POST /profile/cover
 * @param {File} file
 */
export const uploadCover = async (file) => {
  const formData = new FormData();
  formData.append('cover', file);
  const { data } = await api.post('/profile/cover', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

/**
 * Get visitors (people who viewed your profile)
 * GET /profile/visitors
 */
export const getProfileVisitors = async () => {
  const { data } = await api.get('/profile/visitors');
  return data;
};
