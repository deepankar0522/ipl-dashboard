import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MatchDetailCard from "./../components/MatchDetailCard";
import YearSelector from "./../components/YearSelector";
import "./MatchPage.scss";

const MatchPage = () => {
  const [matchData, setMatchData] = useState();
  const { teamName, year } = useParams();
  let URL = `http://localhost:8080/ipl-dashboard/teams/${teamName}/matches?year=${year}`;
  // console.log(URL);
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setMatchData(response.data);
      })
      .catch((e) => console.log("Error!, cannot fetch"));
  }, [URL]);
  // console.log(matchData, year);

  return (
    <div className="MatchPage">
      
      <div className="year-selector">
        <h3> Select Year </h3>
        <YearSelector teamName={teamName} />
      </div>
      <div>
      <h1 className="page-heading">{teamName} matches in {year}</h1>
        {matchData &&
          matchData.map((match) => (
            <MatchDetailCard
              key={match.id}
              teamName={teamName}
              latestMatch={match}
            />
          ))}
      </div>
    </div>
  );
};

export default MatchPage;
