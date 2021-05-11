import React from "react";
import { Link } from "react-router-dom";
import "./MatchDetailCard.scss";

const MatchDetailCard = ({ teamName, latestMatch }) => {
  // console.log(latestMatch);
  const otherTeam = teamName === latestMatch.team1 ? latestMatch.team2 : latestMatch.team1;
  const isWinner = teamName === latestMatch.matchWinner;
  const otherTeamLink = "/teams/" + otherTeam;
  return (
    <div className={isWinner ? 'MatchDetailCard won-card' : 'MatchDetailCard lost-card'}>
      <div className="left-details">
        <span className="vs">vs </span>
        <h1>
          <Link to={otherTeamLink}>{otherTeam}</Link>
        </h1>
        <h2 className="match-date">{latestMatch.date}</h2>
        <h3 className="match-venue">
          at {latestMatch.venue}, {latestMatch.city}
        </h3>
        <h3 className="match-result">
          {latestMatch.matchWinner} won by {latestMatch.resultMargin}{" "}
          {latestMatch.result}
        </h3>
      </div>
      <div className="right-details">
        <h3>First Innings</h3>
        <p>{latestMatch.team1}</p>
        <h3>Second Innings</h3>
        <p>{latestMatch.team2}</p>
        <h3>Man of the match</h3>
        <p>{latestMatch.playerOfMatch}</p>
        <h3>Umpires</h3>
        <p>
          {latestMatch.umpire1}, {latestMatch.umpire2}
        </p>
      </div>
    </div>
  );
};

export default MatchDetailCard;
