import axios from 'axios';
type Action = { action: string };

export async function createUserAction(action: Action) {
  const res = await axios.post('http://localhost:3001/users', action);
  return res;
}
