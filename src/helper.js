export const planetCleaner = (planets) => {
  const cleanPlanets = planets.map((planet, index) => {
    return {
      name: planet.name,
      population: planet.population,
      terrain: planet.terrain,
      climate: planet.climate,
      residents: planet.residents,
      id: `${index} ${planet.name}`
    };
  });
  return cleanPlanets;
};

export const generateRandomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

export const vehicleCleaner = (vehicles) => {
  const vehiclesToRender = vehicles.map((vehicle, index) => {
    return {
      name: vehicle.name,
      model: vehicle.model,
      class: vehicle.vehicle_class,
      passengers: vehicle.passengers,
      id: `${index} ${vehicle.name}`
    };
  });
  return vehiclesToRender;
};