/**
 * proposalService.js
 * -------------------
 * API calls for submitting, viewing, and managing proposals.
 */

import api from './axiosInstance';

/**
 * Get all proposals submitted by the current user
 * GET /proposals
 */
export const getMyProposals = async () => {
  const { data } = await api.get('/proposals');
  return data;
};

/**
 * Get a single proposal by slug/id
 * GET /proposals/:slug
 */
export const getProposalBySlug = async (slug) => {
  const { data } = await api.get(`/proposals/${slug}`);
  return data;
};

/**
 * Submit a new proposal for a job
 * POST /proposals
 * @param {FormData | object} payload - includes jobId, proposalText, attachments
 */
export const submitProposal = async (payload) => {
  // Use FormData if sending file attachments
  const isFormData = payload instanceof FormData;
  const { data } = await api.post('/proposals', payload, {
    headers: isFormData ? { 'Content-Type': 'multipart/form-data' } : {},
  });
  return data;
};

/**
 * Cancel / withdraw a proposal
 * DELETE /proposals/:id
 */
export const cancelProposal = async (proposalId) => {
  const { data } = await api.delete(`/proposals/${proposalId}`);
  return data;
};
