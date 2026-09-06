/**
 * chatService.js
 * ---------------
 * API calls for the messaging / chat feature.
 */

import api from './axiosInstance';

/**
 * Get all chat conversations for the current user
 * GET /messages
 */
export const getConversations = async () => {
  const { data } = await api.get('/messages');
  return data;
};

/**
 * Get messages in a specific conversation
 * GET /messages/:conversationId
 */
export const getMessages = async (conversationId) => {
  const { data } = await api.get(`/messages/${conversationId}`);
  return data;
};

/**
 * Send a text message
 * POST /messages/:conversationId
 * @param {string} conversationId
 * @param {{ message: string }} payload
 */
export const sendMessage = async (conversationId, payload) => {
  const { data } = await api.post(`/messages/${conversationId}`, payload);
  return data;
};

/**
 * Send a file (image/document) in a chat
 * POST /messages/:conversationId/file
 * @param {string} conversationId
 * @param {File} file
 */
export const sendFile = async (conversationId, file) => {
  const formData = new FormData();
  formData.append('file', file);
  const { data } = await api.post(`/messages/${conversationId}/file`, formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return data;
};

/**
 * Start a new conversation with a user
 * POST /messages/start
 * @param {{ recipientId: string }} payload
 */
export const startConversation = async (recipientId) => {
  const { data } = await api.post('/messages/start', { recipientId });
  return data;
};
