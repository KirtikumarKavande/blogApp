import { BLOG_ENDPOINT } from "./constant";
import { handleNetworkError, handleResponseError } from "./errorHelper";

export async function fetchBlogs({ page = 1, limit = 9 } = {}) {
  try {
    const offset = (page - 1) * limit;
    const response = await fetch(`${BLOG_ENDPOINT}?offset=${offset}&limit=${limit}`);
    
    if (!response.ok) {
      throw new Error(handleResponseError(response));
    }
    
    const data = await response.json();
    return {
      blogs: data.blogs,
      totalBlogs: data.total_blogs,
      totalPages: Math.ceil(data.total_blogs / limit),
      currentPage: page
    };
  } catch (error) {
    console.error('Error fetching blogs:', error);
    throw new Error(handleNetworkError(error));
  }
}
export async function fetchBlogById(id) {
  try {
    if (!id) {
      throw new Error('Blog ID is required');
    }
    const response = await fetch(`${BLOG_ENDPOINT}/${id}`);
    
    const blogErrorMessages = {
      400: 'Bad request: Invalid blog ID format',
      404: null 
    };
    if (!response.ok) {
      if (response.status === 404) {
        return null; 
      }
      throw new Error(handleResponseError(response, blogErrorMessages));
    }
    
    const data = await response.json();
    return data.blog;
  } catch (error) {
    console.error(`Error fetching blog with ID ${id}:`, error);
    throw new Error(handleNetworkError(error));
  }
}