/* eslint-disable react/prop-types */

function FilmList({ filmNames }) {
  return (
    <ul>
      {filmNames.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default FilmList;
