const formatNumber = (number) => {
  return number.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

const getPopulation = (population) => {
  if (population === "unknown") {
    return "Unknown";
  }
  const populationNumber = Number(population);
  return isNaN(populationNumber) ? "Unknown" : formatNumber(populationNumber);
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}.${month}.${day}`;
};

const capitalizeWords = (str) => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
export { formatNumber, getPopulation, formatDate, capitalizeWords };
