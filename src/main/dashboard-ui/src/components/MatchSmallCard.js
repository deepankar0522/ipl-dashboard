import React from "react";
import { Link } from 'react-router-dom'

const MatchSmallCard = ({ match, teamName }) => {
  //console.log(match);
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const otherTeamLink = "/teams/"+otherTeam;
  return (
    <div className="MatchSmallCard">
      <h3>vs <Link to= {otherTeamLink}>{otherTeam}</Link></h3>
      <p>{match.matchWinner} won by {match.resultMargin} {match.result}</p>
    </div>
  );
};

export default MatchSmallCard;
