/**
 * notificationService.js
 * -----------------------
 * API calls for notifications and notification settings.
 */

import api from './axiosInstance';

/**
 * Get all notifications
 * GET /notifications
 */
export const getNotifications = async () => {
  const { data } = await api.get('/notifications');
  return data;
};

/**
 * Mark a notification as read
 * PATCH /notifications/:id/read
 */
export const markAsRead = async (notificationId) => {
  const { data } = await api.patch(`/notifications/${notificationId}/read`);
  return data;
};

/**
 * Mark all notifications as read
 * PATCH /notifications/read-all
 */
export const markAllAsRead = async () => {
  const { data } = await api.patch('/notifications/read-all');
  return data;
};

/**
 * Get notification settings
 * GET /notifications/settings
 */
export const getNotificationSettings = async () => {
  const { data } = await api.get('/notifications/settings');
  return data;
};

/**
 * Update notification settings
 * PATCH /notifications/settings
 * @param {object} settings - { connectionRequests: bool, profileViews: bool, ... }
 */
export const updateNotificationSettings = async (settings) => {
  const { data } = await api.patch('/notifications/settings', settings);
  return data;
};
