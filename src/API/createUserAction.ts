import axios from 'axios';
type Action = { action: string };

export async function createUserAction(action: Action) {
  const res = await axios({
    method: 'POST',
    url: 'https://pirate-back.herokuapp.com/users',
    data: action,
  });
  return res;
}
