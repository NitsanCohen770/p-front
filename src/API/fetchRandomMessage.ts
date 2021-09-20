import axios from 'axios';

export async function fetchRandomMessage() {
  const funnyMessage = await fetch('https://pirate-back.herokuapp.com/users')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data.data;
    });
  return funnyMessage;
}
