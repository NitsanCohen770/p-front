import axios from 'axios';

export async function fetchRandomMessage() {
  const { data } = await axios.get('http://localhost:3001/users');
  return data;
}
