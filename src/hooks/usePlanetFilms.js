import { useEffect, useState } from "react";
import { BASE_URL } from "../api/swapi";

const usePlanetFilms = (planet) => {
  const [filmNames, setFilmNames] = useState([]);

  useEffect(() => {
    const fetchFilmNames = async () => {
      try {
        const response = await fetch(`${BASE_URL}/films`);
        const data = await response.json();
        const films = data.results.reduce((acc, film) => {
          acc[film.url] = film.title;
          return acc;
        }, {});

        const planetFilmNames = planet.films.map((filmUrl) => films[filmUrl]);
        setFilmNames(planetFilmNames);
      } catch (error) {
        console.error("Error fetching film names:", error.message);
      }
    };

    fetchFilmNames();
  }, [planet.films]);
  return filmNames;
};

export default usePlanetFilms;
