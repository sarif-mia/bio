const API_BASE_URL = import.meta.env.VITE_API_URL || '/api';

export class ApiError extends Error {
  constructor(message, status, data) {
    super(message);
    this.status = status;
    this.data = data;
  }
}

const apiRequest = async (endpoint, options = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json().catch(() => null);
  if (!response.ok) {
    throw new ApiError(data?.error || `Request failed (${response.status})`, response.status, data);
  }
  return data;
};

export const api = {
  getProjects: () => apiRequest('/projects'),

  submitContactForm: (data) => apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  health: () => apiRequest('/health'),
};
