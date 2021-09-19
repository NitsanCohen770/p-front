import axios from 'axios';
type Action = { action: string };

export async function createUserAction(action: Action) {
  const res = await axios.post(
    'https://pirate-back.herokuapp.com/users',
    action
  );
  return res;
}
