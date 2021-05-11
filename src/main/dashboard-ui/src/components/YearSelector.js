import React from "react";
import { Link } from "react-router-dom";

import './YearSelector.scss'

const YearSelector = ({teamName}) => {
  const startYear = process.env.REACT_APP_DATA_START_YEAR;
  const endYear = process.env.REACT_APP_DATA_END_YEAR;
  let years = [];
  for (let i = endYear; i >= startYear; i--) {
    years.push(i);
  }
  return (
    <ol className="YearSelector">
      {years &&
        years.map((year) => (
          <li key={year}>
            <Link to={`/teams/${teamName}/matches/${year}`}>{year}</Link>
          </li>
        ))}
    </ol>
  );
};

export default YearSelector;
