import React from "react";
import { Link } from "react-router-dom";

const MatchDetailCard = ({ teamName, latestMatch }) => {
  const otherTeam = teamName === latestMatch.team1 ? latestMatch.team2 : latestMatch.team1;
  const otherTeamLink = "/teams/"+otherTeam;
  return (
    <div className="MatchDetailCard">
      <h1>Latest Matches</h1>
      <h2>vs <Link to= {otherTeamLink}>{otherTeam}</Link></h2>
      <h4>at {latestMatch.venue}, {latestMatch.city}</h4>
      <h3>{latestMatch.matchWinner} won by {latestMatch.resultMargin} {latestMatch.result}</h3>
    </div>
  );
};

export default MatchDetailCard;
