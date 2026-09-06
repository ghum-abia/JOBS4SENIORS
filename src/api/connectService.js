/**
 * connectService.js
 * ------------------
 * API calls for connection requests (network).
 */

import api from './axiosInstance';

/**
 * Get received connection requests
 * GET /connections/received
 */
export const getReceivedRequests = async () => {
  const { data } = await api.get('/connections/received');
  return data;
};

/**
 * Get sent connection requests
 * GET /connections/sent
 */
export const getSentRequests = async () => {
  const { data } = await api.get('/connections/sent');
  return data;
};

/**
 * Get accepted connections (your network)
 * GET /connections
 */
export const getConnections = async () => {
  const { data } = await api.get('/connections');
  return data;
};

/**
 * Send a connection request
 * POST /connections/request/:userId
 */
export const sendConnectionRequest = async (userId) => {
  const { data } = await api.post(`/connections/request/${userId}`);
  return data;
};

/**
 * Accept a connection request
 * PATCH /connections/:id/accept
 */
export const acceptConnection = async (connectionId) => {
  const { data } = await api.patch(`/connections/${connectionId}/accept`);
  return data;
};

/**
 * Decline a connection request
 * PATCH /connections/:id/decline
 */
export const declineConnection = async (connectionId) => {
  const { data } = await api.patch(`/connections/${connectionId}/decline`);
  return data;
};

/**
 * Withdraw a sent request
 * DELETE /connections/:id
 */
export const withdrawRequest = async (connectionId) => {
  const { data } = await api.delete(`/connections/${connectionId}`);
  return data;
};
