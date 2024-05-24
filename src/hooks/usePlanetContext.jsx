// src/hooks/usePlanetContext.js
import { useContext } from "react";
import { PlanetContext } from "../context/PlanetContext";

const usePlanetContext = () => {
  const context = useContext(PlanetContext);
  if (!context) {
    throw new Error("usePlanetContext must be used within a PlanetProvider");
  }
  return context;
};

export default usePlanetContext;
