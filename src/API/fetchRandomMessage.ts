import axios from 'axios';

export async function fetchRandomMessage() {
  const { data } = await axios.get('https://pirate-back.herokuapp.com/users');
  return data;
}
