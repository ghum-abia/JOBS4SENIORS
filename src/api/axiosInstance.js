/**
 * axiosInstance.js
 * -----------------
 * Centralized Axios client for all JOBS4SENIORS API calls.
 *
 * Usage:
 *   import api from '../api/axiosInstance';
 *   const data = await api.get('/jobs');
 *
 * The base URL is read from the VITE_API_BASE_URL env variable.
 * Set it in .env:
 *   VITE_API_BASE_URL=http://localhost:8000/api
 */

import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3012/api',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// ─── Request Interceptor ─────────────────────────────────────────────────────
// Automatically attach the auth token from localStorage to every request.
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ─── Response Interceptor ────────────────────────────────────────────────────
// Centrally handle auth errors (401 → redirect to login) and unwrap JSend responses.
api.interceptors.response.use(
  (response) => {
    if (response.data && response.data.status === 'success' && response.data.data !== undefined) {
      return { ...response, data: response.data.data };
    }
    return response;
  },
  (error) => {
    const status = error.response?.status;

    if (status === 401) {
      // Token expired or invalid — clear storage and redirect to login
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/login';
    }

    if (status === 403) {
      console.error('Forbidden: You do not have permission for this action.');
    }

    if (status >= 500) {
      console.error('Server error:', error.response?.data?.message || 'Unknown server error');
    }

    return Promise.reject(error);
  }
);

export default api;
