/**
 * src/api/index.js
 * -----------------
 * Barrel export — import any service from one place:
 *
 *   import { login, logout } from '../api';
 *   import { getJobs, bookmarkJob } from '../api';
 */

export { default as api } from './axiosInstance';

export * from './authService';
export * from './jobService';
export * from './proposalService';
export * from './profileService';
export * from './feedService';
export * from './connectService';
export * from './notificationService';
export * from './chatService';
