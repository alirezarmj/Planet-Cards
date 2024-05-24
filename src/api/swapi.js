export const BASE_URL = "https://swapi.dev/api";

export const fetchPlanets = async () => {
  const response = await fetch(`${BASE_URL}/planets`);
  const data = await response.json();
  //   console.log(data.results);
  return data.results;
};

export const fetchPeople = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);
  return data;
};

export const fetchSpecies = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(JSON.stringify(data, null, 2));
  return data;
};
// export const fetchFilms = async () => {
//   const response = await fetch("https://swapi.dev/api/films");
//   const data = await response.json();
//   //   console.log(data);
//   return data;
// };

const getFilteredPlanets = async () => {
  try {
    const planets = await fetchPlanets();
    const promises = planets.map(async (planet) => {
      const residentPromises = planet.residents.map(async (residentUrl) => {
        const resident = await fetchPeople(residentUrl);
        const speciesPromises = resident.species.map(fetchSpecies);
        const species = await Promise.all(speciesPromises);
        return species.some((speciesItem) => speciesItem.classification === "mammal");
      });
      const residents = await Promise.all(residentPromises);
      return residents.some((isReptile) => isReptile) ? planet : null;
    });
    const filteredPlanets = await Promise.all(promises);
    // console.log(filteredPlanets);
    return filteredPlanets.filter((planet) => planet !== null);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export { getFilteredPlanets };
