

const fetchData = (number, category) => {
  const url = `https://swapi.co/api/${category}/${number}/`;
  const promise = fetch(url)
    .then(data => data.json())
    .catch(error => console.log(error));
  return promise;
};

export default fetchData;