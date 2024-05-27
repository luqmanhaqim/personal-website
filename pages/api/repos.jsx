import { fetchRepos } from '../../lib/fetchRepos';

export default async function handler(req, res) {
  try {
    const data = await fetchRepos();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}