// src/context/PlanetContext.js
/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";
import { getFilteredPlanets } from "../api/swapi";

// Define initial state
const initialState = {
  planets: [],
  loading: false,
  error: null,
};

// Define actions
const actionTypes = {
  FETCH_PLANETS_START: "FETCH_PLANETS_START",
  FETCH_PLANETS_SUCCESS: "FETCH_PLANETS_SUCCESS",
  FETCH_PLANETS_ERROR: "FETCH_PLANETS_ERROR",
  UPDATE_PLANET: "UPDATE_PLANET",
};

// Create reducer
const planetReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PLANETS_START:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_PLANETS_SUCCESS:
      return { ...state, loading: false, planets: action.payload };
    case actionTypes.FETCH_PLANETS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case actionTypes.UPDATE_PLANET:
      return {
        ...state,
        planets: state.planets.map((planet) => (planet.name === action.payload.name ? action.payload : planet)),
      };
    default:
      return state;
  }
};

// Create context
const PlanetContext = createContext();
const fetchPlanetsData = async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PLANETS_START });
  try {
    const planets = await getFilteredPlanets();
    // console.log(planets);
    dispatch({ type: actionTypes.FETCH_PLANETS_SUCCESS, payload: planets });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_PLANETS_ERROR, payload: error.message + "  ,please try again later !" });
  }
};
// Update PlanetProvider to fetch data on mount
const PlanetProvider = ({ children }) => {
  const [state, dispatch] = useReducer(planetReducer, initialState);

  useEffect(() => {
    fetchPlanetsData(dispatch);
  }, []);

  return <PlanetContext.Provider value={{ state, dispatch }}>{children}</PlanetContext.Provider>;
};

export { PlanetContext, PlanetProvider, actionTypes };
