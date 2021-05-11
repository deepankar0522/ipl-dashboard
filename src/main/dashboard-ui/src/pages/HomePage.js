import axios from "axios";
import { useEffect, useState } from "react";
import TeamTile from "../components/TeamTile";
import "./HomePage.scss";

const HomePage = () => {
  const [teams, setTeams] = useState([]);
  let URL = `${process.env.REACT_APP_API_ROOT_URL}/ipl-dashboard/teams`;
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => setTeams(response.data))
      .catch((e) => {
        console.log("Cannot fetch teams !!");
      });
  }, [URL]);
    console.log(URL);
  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
      </div>
      <div className="team-grid">
        {teams.map((team) => (
          <TeamTile key={team.id} teamName={team.teamName} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
