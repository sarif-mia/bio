const API_BASE_URL = '/api';

// Function to handle API requests
const apiRequest = async (endpoint, options = {}) => {
  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`API request failed for ${endpoint}:`, error);
    throw error;
  }
};

// API functions
export const api = {
  // Get projects
  getProjects: () => apiRequest('/projects'),

  // Submit contact form
  submitContactForm: (data) => apiRequest('/contact', {
    method: 'POST',
    body: JSON.stringify(data),
  }),

  // Hello endpoint (for testing)
  getHello: () => apiRequest('/hello'),
};