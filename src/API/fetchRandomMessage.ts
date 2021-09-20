import axios from 'axios';

export async function fetchRandomMessage() {
  const res = await fetch('https://pirate-back.herokuapp.com/users');
  return res;
}
