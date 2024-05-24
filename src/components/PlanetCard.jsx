/* eslint-disable react/prop-types */
import { BsCupHot } from "react-icons/bs";
import { capitalizeWords, formatDate, getPopulation } from "../util";
import usePlanetFilms from "../hooks/usePlanetFilms";

const PlanetCard = ({ planet }) => {
  const filmNames = usePlanetFilms(planet);

  return (
    <div className="bg-gray-800 min-h-[150px] shadow-md    text-white   rounded-lg overflow-hidden transform transition-transform duration-300 hover:scale-102 hover:shadow-lg">
      <div className="p-3  gap-y-3 flex flex-col xl:justify-between  xl:flex-row items-center">
        <div>
          <p className="font-bold text-xl">Planet Created</p>
          <div className="flex items-center gap-2 mt-2">
            <BsCupHot size={30} color="orange" />
            <div className="pl-2">
              <div className="flex items-center space-x-1">
                <p>Planet Name:</p>
                <p className="text-gray-400 transition-colors duration-300 hover:text-blue-500">{planet.name}</p>
              </div>

              <div className="flex items-center gap-2">
                <p className="whitespace-nowrap">Planet films:</p>
                <ul className="list-disc list-inside text-gray-500"> {filmNames.length > 0 ? filmNames.map((title, index) => <li key={index}>{title}</li>) : <li>None</li>}</ul>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="text-orange-400 transition-colors duration-300 hover:text-orange-600">
            {" "}
            Planet Created at:{"  "}
            {formatDate(planet.created)}
          </p>
          <div className="flex items-center space-x-1">
            <p>Planet &#39;s Climate:</p>
            <p className="text-gray-400 transition-colors duration-300 hover:text-blue-500">{capitalizeWords(planet.climate)}</p>
          </div>
          <div className="flex items-center space-x-1">
            <p>Population:</p>
            <p className="text-gray-400 transition-colors duration-300 hover:text-blue-500">{getPopulation(planet.population)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanetCard;
