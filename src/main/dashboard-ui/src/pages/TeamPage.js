import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [teamData, setTeamData] = useState();
  const { teamName } = useParams();
  let URL = `http://localhost:8080/ipl-dashboard/teams/${teamName}`;
 // console.log(URL);
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setTeamData(response.data);
      })
      .catch((e) => console.log("Error!, cannot fetch"));
  }, [URL]);
 // console.log(teamData);
  return (
    <div className="TeamPage">
      <h1>{teamData && teamData.teamName}</h1>
      {teamData && <MatchDetailCard latestMatch={teamData.matches[0]} teamName={teamName}/>}
      {teamData &&
        teamData.matches.slice(1).map((match) => {
          return <MatchSmallCard key={match.id} match={match} teamName={teamName}/>;
        })}
    </div>
  );
};
