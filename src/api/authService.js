/**
 * authService.js
 * ---------------
 * API calls for authentication: login, register, forgot password, logout.
 */

import api from './axiosInstance';

/**
 * Login user
 * POST /auth/login
 * @param {{ email: string, password: string }} credentials
 * @returns {{ token: string, user: object }}
 */
export const login = async (credentials) => {
  const { data } = await api.post('/auth/login', credentials);
  if (data?.token) {
    localStorage.setItem('token', data.token);
  }
  if (data?.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  return data;
};

/**
 * Register a new user
 * POST /auth/register
 * @param {{ fullName: string, email: string, password: string, accountType: 'FREELANCER'|'RECRUITER', phone?: string }} payload
 */
export const register = async (payload) => {
  const { data } = await api.post('/auth/register', payload);
  if (data?.token) {
    localStorage.setItem('token', data.token);
  }
  if (data?.user) {
    localStorage.setItem('user', JSON.stringify(data.user));
  }
  return data;
};

/**
 * Request a password reset email
 * POST /auth/forgot-password
 * @param {{ email: string }} payload
 */
export const forgotPassword = async (payload) => {
  const { data } = await api.post('/auth/forgot-password', payload);
  return data;
};

/**
 * Reset password with token
 * POST /auth/reset-password
 * @param {{ token: string, password: string }} payload
 */
export const resetPassword = async (payload) => {
  const { data } = await api.post('/auth/reset-password', payload);
  return data;
};

/**
 * Logout — clear local storage
 */
export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  window.location.href = '/login';
};

/**
 * Get the currently logged-in user from localStorage (no API call)
 */
export const getCurrentUser = () => {
  try {
    return JSON.parse(localStorage.getItem('user')) || null;
  } catch {
    return null;
  }
};
