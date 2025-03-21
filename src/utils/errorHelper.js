const ERROR_MESSAGES = {
  400: 'Bad request: Invalid parameters',
  401: 'Unauthorized: Authentication required',
  403: 'Forbidden: You do not have access to this resource',
  404: 'Not found: The requested resource cannot be found',
  429: 'Too many requests: Please try again later',
  500: 'Server error: Please try again later'
};

function handleResponseError(response, customMessages = {}) {
  const messages = { ...ERROR_MESSAGES, ...customMessages };
  return messages[response.status] || `Failed request: ${response.status}`;
}

function handleNetworkError(error) {
  if (error.name === 'TypeError' && error.message.includes('Failed to fetch')) {
    return 'Network error: Please check your internet connection';
  }
  return error.message;
}

export { handleResponseError, handleNetworkError };