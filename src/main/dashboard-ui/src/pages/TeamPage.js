import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import { PieChart } from 'react-minimal-pie-chart';


import MatchDetailCard from "../components/MatchDetailCard";
import MatchSmallCard from "../components/MatchSmallCard";
import "./TeamPage.scss";

export const TeamPage = () => {
  const [teamData, setTeamData] = useState();
  const { teamName } = useParams();
  let URL = encodeURI(`${process.env.REACT_APP_API_ROOT_URL}/teams/${teamName}`);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setTeamData(response.data);
      })
      .catch((e) => console.log("Error!, cannot fetch"));
  }, [URL]);
  console.log(URL, teamData);
  return (
    <div className="TeamPage">
      <div className="team-name-section">
        <h1 className="team-name">{teamData && teamData.teamName}</h1>
      </div>
      <div className="win-loss-section">
      <PieChart
        data={[
          { title: 'lost', value: teamData && teamData.totalMatches-teamData.totalWins, color: '#a34d5d' },
          { title: 'won', value: teamData && teamData.totalWins, color: '#4da375' },
        ]}
      />
      </div>
      <div className="match-detail-section">
      <h3>Latest Matches</h3>
        {teamData && (
          <MatchDetailCard
            latestMatch={teamData.matches[0]}
            teamName={teamName}
          />
        )}
      </div>
      {teamData &&
        teamData.matches.slice(1).map((match) => {
          return (
            <MatchSmallCard key={match.id} match={match} teamName={teamName} />
          );
        })}
        <div className="more-link"> 
          <Link to={`/teams/${teamName}/matches/${process.env.REACT_APP_DATA_END_YEAR}`}>More </Link>
        </div>
    </div>
  );
};
