import axios from "axios";
import { useEffect, useState } from "react";
import TeamTile from "../components/TeamTile";
import "./HomePage.scss";

const HomePage = () => {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8080/ipl-dashboard/teams")
      .then((response) => setTeams(response.data))
      .catch((e) => {
        console.log("Cannot fetch teams !!");
      });
  }, []);

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
