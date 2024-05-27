import fetch from 'node-fetch';
require('dotenv').config();

export async function fetchRepos() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/repos`, { cache: 'no-store' });
    
    if (!response.ok) {
      console.error('Failed to fetch repos:', response.status, response.statusText);
      throw new Error('Failed to fetch repos');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}
