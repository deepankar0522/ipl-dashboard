import React, { useEffect, useState } from "react";
import axios from "axios";

import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";

export const TeamPage = () => {
  const [teamData, setTeamData] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:8080/ipl-dashboard/team/Kolkata%20Knight%20Riders")
      .then((response) => {
        setTeamData(response.data);
      })
      .catch((e) => console.log("Error!, cannot fetch"));
  }, []);

  return (
    <div className="TeamPage">
      <h1>{teamData && teamData.teamName}</h1>
      <MatchDetailCard />
      {teamData &&
        teamData.matches.map((match) => {
          {console.log(match)}
          <MatchSmallCard match={match} />;
        })}
    </div>
  );
};
