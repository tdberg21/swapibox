
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const fetchData = async (category) => {
  let number = generateRandomNumber();
  let url = `https://swapi.co/api/${category}/${number}/`;
  try {
    let response = await fetch(url);
    let parsedResponse = response.json();
    return parsedResponse;
  } catch (error) {
    alert(error);
  }
};

export default fetchData;