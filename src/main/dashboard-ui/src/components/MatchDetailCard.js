import React from "react";
import { Link } from "react-router-dom";
import "./MatchSmallCard.scss";

const MatchDetailCard = ({ teamName, latestMatch }) => {
  // console.log(latestMatch);
  const otherTeam =
    teamName === latestMatch.team1 ? latestMatch.team2 : latestMatch.team1;
  const otherTeamLink = "/teams/" + otherTeam;
  return (
    <div className="MatchDetailCard">
      <span className="vs">vs </span>
      <h1>
        <Link to={otherTeamLink}>{otherTeam}</Link>
      </h1>
      <h2>{latestMatch.date}</h2>
      <h3>
        at {latestMatch.venue}, {latestMatch.city}
      </h3>
      <h3>
        {latestMatch.matchWinner} won by {latestMatch.resultMargin}{" "}
        {latestMatch.result}
      </h3>
    </div>
  );
};

export default MatchDetailCard;
