import usePlanetContext from "../hooks/usePlanetContext";
import PlanetCard from "./PlanetCard";
import Spinner from "./Spinner";

const PlanetList = () => {
  const { state } = usePlanetContext();

  if (state.loading) {
    return <Spinner />;
  }

  if (state.error) {
    return <p className="font-[600] text-xl text-slate-600 pl-4">Error: {state.error}</p>;
  }

  return (
    <>
      {state.planets.length === 0 ? (
        <p className="flex justify-center text-slate-600 text-2xl font-bold items-center pt-20 ">No planets to display!</p>
      ) : (
        <div className="grid grid-cols-1  lg:grid-cols-2 gap-4">
          {state.planets.map((planet) => (
            <PlanetCard key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </>
  );
};

export default PlanetList;
