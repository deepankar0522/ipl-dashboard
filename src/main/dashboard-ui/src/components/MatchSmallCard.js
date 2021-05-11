import React from "react";
import { Link } from 'react-router-dom';
import './MatchSmallCard.scss';

const MatchSmallCard = ({ match, teamName }) => {
  //console.log(match);
  const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
  const isWinner = teamName === match.matchWinner;
  const otherTeamLink = "/teams/"+otherTeam;
  return (
    <div className={isWinner ? 'MatchSmallCard won-card' : 'MatchSmallCard lost-card'}>
      <span className="vs">vs </span>
      <h2><Link to= {otherTeamLink}>{otherTeam}</Link></h2>
      <h4 className="match-result">{match.matchWinner} won by {match.resultMargin} {match.result}</h4>
    </div>
  );
};

export default MatchSmallCard;
