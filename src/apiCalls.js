import { planetCleaner, generateRandomNumber, vehicleCleaner } from './helper.js';


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

export const getPeople = async (category) => {
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

export const fetchPlanets = async (category) => {
  const url = `https://swapi.co/api/${category}/`;
  try {
    const response = await fetch(url);
    const parsedResponse = await response.json();
    let planets = await fetchResidents(parsedResponse.results);
    let cleanPlanets = planetCleaner(planets);
    return cleanPlanets;
    
  } catch (error) {
    console.log(error);
  }
};

const fetchResidents = async (planetData) => {
  const planetPromises = planetData.map(async planet => {
    let residentPromises = planet.residents.map(async residentLink => {
      let response = await fetch(residentLink);
      let resident = await response.json();
      return await resident.name;
    });

    const allResidents = await Promise.all(residentPromises);
    return await {...planet, residents: allResidents};
  });
  return await Promise.all(planetPromises);
};

export const fetchVehicleData = async (category) => {
  const url = `https://swapi.co/api/${category}/`;
  const response = await fetch(url);
  const parsedData = await response.json();
  const vehicles = await vehicleCleaner(parsedData.results);
  return await vehicles;
};