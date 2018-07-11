
const generateRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export const fetchData = async (category) => {
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

export const getPeopleData = async (category) => {
  const url = `https://swapi.co/api/${category}/`;
  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    const residentsToFetch = await fetchHomeWorld(parsedResponse.results);
    const people = await fetchSpecies(residentsToFetch);
    return people;
  } catch (error) {
    alert(error);
  }   
};

const fetchHomeWorld = (response) => {
  const unresolvedPromises = response.map(person => (
    fetch(person.homeworld)
      .then(response => response.json())
      .then(results => ({ ...person, homeworld: results.name, population: results.population }))
  ));
  const species = (Promise.all(unresolvedPromises));
  return species;
};

const fetchSpecies = async (response) => {
  console.log(response);
  const unresolvedPromises = await response.map((person, index) => (
    fetch(person.species)
      .then(response => response.json())
      .then(results => ({
        name: person.name,
        homeworld: person.homeworld,
        population: person.population,
        species: results.name,
        id: `${index} ${person.name}`
      }))
  ));
  return Promise.all(unresolvedPromises);
};
