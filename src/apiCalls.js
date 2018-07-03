import generateRandomNumber from './helper.js';


const getScrollText = () => {
  const url = `https://swapi.co/api/films/${generateRandomNumber()}/`;
  const promise = fetch(url)
    .then(data => data.json());

  return promise;
};

export default getScrollText;